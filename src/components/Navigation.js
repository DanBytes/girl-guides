import React, { Component, Fragment } from 'react';
import { BottomNavigation, BottomNavigationAction, TextField } from '@material-ui/core'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Profile from './Profile'
const style = {
    BottomNav: {
        'background': '#0033A1',

    },

    BottomAction: {
        'color': '#EC963A',
        'font-size': '2.5em'
    }


}
class Navigation extends Component {

    route(event) {
        console.log(event)
    }


    render() {
        return (

            <BottomNavigation
                value={0}
                onChange={this.route}
                showLabels
                style={style.BottomNav}
            >
                <Router>
                    <Fragment>
                        <BottomNavigationAction style={style.BottomAction} label="My Profile" icon={<i className="material-icons">face</i>} />
                        <BottomNavigationAction style={style.BottomAction} label="Unit Profile" icon={<i className="material-icons">home</i>} />
                        <BottomNavigationAction style={style.BottomAction} label="Create Program" icon={<i className="material-icons">note_add</i>} />
                        <BottomNavigationAction style={style.BottomAction} label="View Activities" icon={<i className="material-icons">toc</i>} />
                        <BottomNavigationAction style={style.BottomAction} label="About" icon={<i className="material-icons">info</i>} />
                    </Fragment>


                </Router>
            </BottomNavigation>
        )
    }
}

export default Navigation