import { Component } from "react";
import '../App.css';

import up from '../images/icon-up.svg';
import down from '../images/icon-down.svg';

class FollowerCard extends Component{
    
    render(){
        const change = this.props.change;
        let changeStatus;
        if (change === 'pos'){
            changeStatus = 
                <div>
                    <span>
                        <img src={ up } alt="" width={8} height={7}/>
                    </span>
                    <span className="change_count_pos">
                        {this.props.changeCount} Today
                    </span>
                </div>;
            
        }
        else {
            changeStatus = 
                <div>
                    <span>
                        <img src={ down } alt="" width={8} height={7}/>
                    </span>
                    <span className="change_count_neg">
                        {this.props.changeCount} Today
                    </span>
                </div>;
        }    
        return(
            <div className="follower_card">
                <div>
                    <span>
                        <img src={ this.props.icon } alt="social icon" width={12} height={12}/>
                    </span> 
                    <span className="handle">
                        {this.props.handle}
                    </span>
                    
                </div>
                <div className="count_container">
                    <div className="follower_count">{this.props.followerCount}</div>
                    <div className="follower_subtext">FOLLOWERS</div>
                </div>
                
                { changeStatus }
                
            </div>
        )
    }
}

export default FollowerCard;