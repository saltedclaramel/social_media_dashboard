import { Component } from "react";
import FollowerCard from "../components/FollowerCard";

class Dashboard extends Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        return(
            <div>
                <div className="header">
                    <div className="header_name">Social Media Dashboard</div>
                    <div className="header_detail">Total Followers: 23,004</div>
                    
                </div>
                <div className="follower_section">
                    <FollowerCard/>
                </div>

            </div>
        )
    }
}

export default Dashboard;