import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { retrieveUser } from "../../ducks/users.js";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.retrieveUser();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          <h1>This is the home page</h1>
          <Link to="/login">
            <button>Login Page</button>
          </Link>
        </div>
        {this.props.isLoading && (
          <div>
            <h1>Loading Content...</h1>
          </div>
        )}
        {this.props.user && (
          <h1>{this.props.user.displayName}</h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { retrieveUser })(Home);
