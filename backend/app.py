from flask import Flask, send_file
from flask_cors import CORS  # Import CORS from flask_cors

import matplotlib
matplotlib.use('Agg')  # Set the backend to Agg before importing pyplot

import matplotlib.pyplot as plt
import io

app = Flask(__name__)
CORS(app)  # Add CORS to your Flask app

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route('/followerPlot')
def generate_plot():

    data = {'FB':12, 'Twitter':99, 'IG':1099, 'YT':-144}
    courses = list(data.keys())
    values = list(data.values())
    
    fig = plt.figure(figsize = (5.5, 3.8))
    
    colors = ['red' if (x<0) else 'green' for x in values]
    # creating the bar plot
    plt.bar(courses, values, color=colors, width = 0.4)
    
    plt.xlabel("Socials")
    plt.ylabel("Change in no. of followers")
    plt.title("Change in follower count across socials")

    img = io.BytesIO()
    plt.savefig(img, format='png')
    img.seek(0)

    plt.close()  # Close the plot to release resources

    return send_file(img, mimetype='image/png')

if __name__ == '__main__':
    app.run(host='0.0.0.0')