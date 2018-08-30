import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Conect our component to react redux
import { connect } from 'react-redux';

// Import the actions.
import { updateUser } from './actions/user-actions';

// import bind
import { bindActionCreators } from 'redux';

class App extends Component {
  constructor(props) {
    super(props);

    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser(event) {
    this.props.onUpdateUser(event.target.value);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <input onChange={this.onUpdateUser} />
        {this.props.user}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    products: state.products,
    user: state.user,
    userPlusProps: `${state.user} ${props.aRandomProps}`
  }
};

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators ({
    onUpdateUser: updateUser
  }, dispatch);
};

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
  console.log(propsFromState, propsFromDispatch, ownProps);

  return {};
}

export default connect(mapStateToProps, mapActionsToProps, mergeProps)(App);
