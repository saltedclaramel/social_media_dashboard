import { Component } from "react";
import '../App.css';

import up from '../images/icon-up.svg';
import down from '../images/icon-down.svg';

class MetricCard extends Component{
    
    render(){
        const change = this.props.change;
        let changeStatus;
        if (change === 'pos'){
            changeStatus = 
                <div className="change">
                    <span>
                        <img src={ up } alt="" width={8} height={7}/>
                    </span>
                    <span className="change_count_pos">
                        {this.props.changeCount}
                    </span>
                </div>;
            
        }
        else {
            changeStatus = 
                <div className="change">
                    <span>
                        <img src={ down } alt="" width={8} height={7}/>
                    </span>
                    <span className="change_count_neg">
                        {this.props.changeCount}
                    </span>
                </div>;
        }  
        return(
            <div className="metric_container">
                <div className="metric_name">
                    {this.props.metric}
                </div>
                <div>
                    <img src={ this.props.icon } alt="social icon" className="social_icon"/>
                </div>
                <div className="metric_count">
                    {this.props.metricValue}
                </div>
                <div>
                    {changeStatus}
                </div>
                
            
                
            </div>
        )
    }
}

export default MetricCard;