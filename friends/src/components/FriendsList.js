import React from "react";
import Friend from "../components/Friend";
import { getData, addFriend } from "../actions";
import { connect } from "react-redux";
import FriendsForm from "./FriendsForm";

class FriendsList extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }

  componentDidMount() {
    this.props.getData();
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const newFriend = {
      name: this.state.name,
      age: parseInt(this.state.age),
      email: this.state.email
    };
    return (
      <div className="App">
        <div className="friendsListCSS">
          {this.props.friends.map(friend => (
            <Friend key={friend.id} {...friend} />
          ))}
        </div>
        <FriendsForm
          {...this.state}
          handleChange={this.handleChange}
          addFriend={this.props.addFriend}
          newFriend={newFriend}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.fetchDataReducer.friends
});

export default connect(
  mapStateToProps,
  { getData, addFriend }
)(FriendsList);
