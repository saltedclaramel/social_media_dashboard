import { Component } from "react";
import FollowerCard from "../components/FollowerCard";
import MetricCard from "../components/MetricCard";

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            socials: [
                        {'social':'/icon-facebook.svg', 'handle': '@nathanf', 'followerCount': '1987', 'changeCount': 12, 'change': 'pos'},
                        {'social':'/icon-twitter.svg', 'handle': '@nathanf', 'followerCount': '1004', 'changeCount': 99, 'change': 'pos'},
                        {'social':'/icon-instagram.svg', 'handle': '@realnathanf', 'followerCount': '11k', 'changeCount': 1099, 'change': 'pos'},
                        {'social':'/icon-youtube.svg', 'handle': 'Nathan F.', 'followerCount': '8239', 'changeCount': 144, 'change': 'neg'}
                    ],
            fbMetrics: [
                {'social': '/icon-facebook.svg', 'metric': 'Page Views', 'metricValue': '87', 'changeCount': '3%', 'change': 'pos'},
                {'social': '/icon-facebook.svg', 'metric': 'Likes', 'metricValue': '52', 'changeCount': '2%', 'change': 'neg'}
            ],
            igMetrics: [
                {'social': '/icon-instagram.svg', 'metric': 'Likes', 'metricValue': '5462', 'changeCount': '2257%', 'change': 'pos'},
                {'social': '/icon-instagram.svg', 'metric': 'Profile Views', 'metricValue': '52k', 'changeCount': '1375%', 'change': 'pos'}
            ],
            twitterMetrics: [
                {'social': '/icon-twitter.svg', 'metric': 'Retweets', 'metricValue': '117', 'changeCount': '303%', 'change': 'pos'},
                {'social': '/icon-twitter.svg', 'metric': 'Likes', 'metricValue': '507', 'changeCount': '553%', 'change': 'pos'}
            ],
            ytMetrics: [
                {'social': '/icon-youtube.svg', 'metric': 'Likes', 'metricValue': '107', 'changeCount': '19%', 'change': 'neg'},
                {'social': '/icon-youtube.svg', 'metric': 'Total Views', 'metricValue': '1407', 'changeCount': '12%', 'change': 'neg'}
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
                        />
                    )}
                </div>

                <div className="overview_header">Overview - Today</div>
                <div className="metric_section">
                    {this.state.fbMetrics.map((metric) =>
                        <MetricCard 
                        metric = {metric['metric']}
                        icon = {metric['social']}
                        metricValue = {metric['metricValue']}
                        changeCount = {metric['changeCount']}
                        change = {metric['change']}
                        />
                    )}
                    {this.state.igMetrics.map((metric) =>
                        <MetricCard 
                        metric = {metric['metric']}
                        icon = {metric['social']}
                        metricValue = {metric['metricValue']}
                        changeCount = {metric['changeCount']}
                        change = {metric['change']}
                        />
                    )}
                    {this.state.twitterMetrics.map((metric) =>
                        <MetricCard 
                        metric = {metric['metric']}
                        icon = {metric['social']}
                        metricValue = {metric['metricValue']}
                        changeCount = {metric['changeCount']}
                        change = {metric['change']}
                        />
                    )}
                    {this.state.ytMetrics.map((metric) =>
                        <MetricCard 
                        metric = {metric['metric']}
                        icon = {metric['social']}
                        metricValue = {metric['metricValue']}
                        changeCount = {metric['changeCount']}
                        change = {metric['change']}
                        />
                    )}
                </div>

            </div>
        )
    }
}

export default Dashboard;