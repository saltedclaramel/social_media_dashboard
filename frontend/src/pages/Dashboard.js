import { Component } from "react";
import FollowerCard from "../components/FollowerCard";
import MetricCard from "../components/MetricCard";
import FollowerPlot from "../components/FollowerPlot";

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            socials: [],
            fbMetrics: [],
            igMetrics: [],
            twitterMetrics: [],
            ytMetrics: [],
            error: null
        }
    }
    componentDidMount() {
        this.fetchData();
      }
    
      fetchData = async () => {
        try {
          const response = await fetch('http://127.0.0.1:5000/data');
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const jsonData = await response.json();
          this.setState({ 
            socials: jsonData.socials,
            fbMetrics: jsonData.fbMetrics,
            igMetrics: jsonData.igMetrics,
            twitterMetrics: jsonData.twitterMetrics,
            ytMetrics: jsonData.ytMetrics

         });

        } catch (error) {
          console.error('Error fetching data:', error);
          this.setState({ error: "Failed to fetch data. Please try again later." });
        }
      };
    
    render(){
        const { socials, fbMetrics, igMetrics, twitterMetrics, ytMetrics, error } = this.state;
        return(
            <div>
        {error ? (
          <div>{error}</div>
        ) : (
          <>
            <div className="header">
              <div className="header_name">Social Media Dashboard</div>
              <div className="header_detail">Total Followers: 23,004</div>
            </div>

            <div className="follower_section">
              {socials.map((social, index) => (
                <FollowerCard
                  key={index}
                  icon={social.icon}
                  handle={social.handle}
                  followerCount={social.followerCount}
                  changeCount={social.changeCount}
                  change={social.change}
                />
              ))}
            </div>

            <div className="overview_header">Overview - Today</div>
            <div className="metric_section">
              {fbMetrics.map((metric, index) => (
                <MetricCard
                  key={index}
                  metric={metric.metric}
                  icon={metric.social}
                  metricValue={metric.metricValue}
                  changeCount={metric.changeCount}
                  change={metric.change}
                />
              ))}
              {igMetrics.map((metric, index) => (
                <MetricCard
                  key={index}
                  metric={metric.metric}
                  icon={metric.social}
                  metricValue={metric.metricValue}
                  changeCount={metric.changeCount}
                  change={metric.change}
                />
              ))}
              {twitterMetrics.map((metric, index) => (
                <MetricCard
                  key={index}
                  metric={metric.metric}
                  icon={metric.social}
                  metricValue={metric.metricValue}
                  changeCount={metric.changeCount}
                  change={metric.change}
                />
              ))}
              {ytMetrics.map((metric, index) => (
                <MetricCard
                  key={index}
                  metric={metric.metric}
                  icon={metric.social}
                  metricValue={metric.metricValue}
                  changeCount={metric.changeCount}
                  change={metric.change}
                />
              ))}
            </div>
          </>
        )}
        <div className="visualisations_header">Matplotlib Visualisations</div>
        <div className="visualisations_section">
            <div>
                <FollowerPlot/>
            </div>
            <div></div>
        </div>
      </div>
        )
    }
}

export default Dashboard;