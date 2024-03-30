import { Component } from "react";
import '../App.css';
import fb from '../images/icon-facebook.svg';
import up from '../images/icon-up.svg';
import down from '../images/icon-down.svg';

class FollowerCard extends Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        return(
            <div className="follower_card">
                <div>
                    <span>
                        <img src={ fb } alt="" width={15} height={15}/>
                    </span> 
                    <span className="handle">
                        @nathanf
                    </span>
                    
                </div>
                <div className="count_container">
                    <div className="follower_count">1987</div>
                    <div className="follower_subtext">FOLLOWERS</div>
                </div>
                {/* <div>
                    <span>
                        <img src={ down } alt="" width={8} height={7}/>
                    </span> 
                    <span className="change_count_neg">
                        12 Today
                    </span>
                </div> */}
                <div>
                    <span>
                        <img src={ up } alt="" width={8} height={7}/>
                    </span> 
                    <span className="change_count_pos">
                        12 Today
                    </span>
                </div>
            </div>
        )
    }
}

export default FollowerCard;