import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';

class AllRoutes extends Component{
    render(){
        return(
            <Fragment>
                <Route exact path="/" component={ Dashboard }/>             
            </Fragment>
        )
    }
}

export default AllRoutes;