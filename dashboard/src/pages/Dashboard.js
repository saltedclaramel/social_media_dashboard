import { Component } from "react";
import FollowerCard from "../components/FollowerCard";

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            socials: [
                        {'social':'/icon-facebook.svg', 'handle': '@nathanf', 'followerCount': '1987', 'changeCount': 12, 'change': 'pos'},
                        {'social':'/icon-twitter.svg', 'handle': '@nathanf', 'followerCount': '1004', 'changeCount': 99, 'change': 'pos'},
                        {'social':'/icon-instagram.svg', 'handle': '@realnathanf', 'followerCount': '11k', 'changeCount': 1099, 'change': 'pos'},
                        {'social':'/icon-youtube.svg', 'handle': 'Nathan F.', 'followerCount': '8239', 'changeCount': 144, 'change': 'neg'}
                    ]
        }
    }
    render(){
        return(
            <div>
                <div className="header">
                    <div className="header_name">Social Media Dashboard</div>
                    <div className="header_detail">Total Followers: 23,004</div>
                    
                </div>
                <div className="follower_section">
                    {this.state.socials.map((social) => 
                        <FollowerCard 
                        icon = {social['social']}
                        handle = {social['handle']} 
                        followerCount = {social['followerCount']} 
                        changeCount = {social['changeCount']}
                        change = {social['change']}
                    />)}
                </div>

            </div>
        )
    }
}

export default Dashboard;