import { Component } from "react";
import { Button, Card, Col } from "react-bootstrap";
import CommentsArea from "./CommentsArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Col xs={12} sm={6} md={4} lg={3} xl={2} className="gy-3">
        <Card
          className={"h-100"}
          style={{
            height: "850px",
            border: this.state.selected ? "2px solid red" : "1px solid gray",
          }}
        >
          <Card.Img
            variant="top"
            style={{ height: "350px" }}
            className="img-fluid"
            src={this.props.book.img}
            onClick={() => {
              this.setState({
                selected: !this.state.selected, // toggle
              });
            }}
          />
          <Card.Body className="d-flex flex-column">
            <Card.Title>{this.props.book.title}</Card.Title>
            <Button variant="primary" className="mt-auto">
              Shop for {this.props.book.price} $
            </Button>
          </Card.Body>
          {this.state.selected && (
            <CommentsArea bookId={this.props.book.asin} />
          )}
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
