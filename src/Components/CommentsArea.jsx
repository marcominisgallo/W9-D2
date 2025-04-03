import { Component } from "react";

import CommentList from "./CommentList";

const URL = "https://striveschool-api.herokuapp.com/api/comments/";

class CommentsArea extends Component {
  state = {
    comments: [],
  };
  getComments = () => {
    fetch(URL + this.props.bookId, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMmE2NDM4MzRiZjAwMTUwMDA3MDIiLCJpYXQiOjE3NDM2ODQxODIsImV4cCI6MTc0NDg5Mzc4Mn0.8z0LjAM3-F2UEL7cNjaZS9AOciW5eQ-jVPxsjWtmHpc",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nella fetch");
        }
      })
      .then((data) => {
        console.log("commenti", data);
        this.setState({
          comments: data,
        });
      })
      .catch((err) => {
        console.log("errore", err);
      });
  };

  componentDidMount() {
    this.getComments();
  }
  render() {
    return (
      <div className="z-2">
        <h6>Commenti</h6>
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}

export default CommentsArea;
