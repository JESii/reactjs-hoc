import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {
  authButton() {
  console.log('actions: ', actions);
    if(this.props.authenticated) {
      return(<button onClick={() => this.props.authenticate(false)}>Sign Out</button>);
    } else {
      return <button onClick={() => this.props.authenticate(true)}>Sign in</button>;
    }
  };

  render() {
    return (
      <div className="contents">
        <h1>My Higher-Order Component</h1>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li className="nav-item home-link">
              <Link to="/home" id="homeLink">Home</Link>
            </li>
            <li className="nav-item resource-link">
              <Link to="/resources">Resources</Link>
            </li>
            <li className="nav-item login-link">
              {this.authButton()}
            </li>
          </ul>
        </nav>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return { authenticated: state.authenticated };
};
export default connect(mapStateToProps, actions)(Header);
