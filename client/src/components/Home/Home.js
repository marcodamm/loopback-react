import React, {Component} from 'react';
import {connect} from 'react-redux';
import History from "../../history";


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    if (!this.props.authenticated)
      History.push('/signin');
  }

  renderHello(user) {
    if (user) {
      return <p>Hello <strong> {user} </strong>, you logged in!</p>
    }
  }

  render() {
    return <React.Fragment>
      <h1 className="h2">Home</h1>
      {this.props.me && this.renderHello(this.props.me.name)}
      <p>This is a static page and you must be logged in to see the page.</p>
    </React.Fragment>;
  }
}

const mapStateToProps = (state) => {
  return {authenticated: state.auth.authenticated, me: state.auth.me}
}

export default connect(mapStateToProps)(Home);
