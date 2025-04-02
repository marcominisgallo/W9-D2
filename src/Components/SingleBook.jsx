import { Component } from "react";
import { Button, Card, Col } from "react-bootstrap";

class SingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  toggleSelected = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }));
  };

  render() {
    return (
      <Col xs={12} sm={6} md={4} lg={3} xl={2} className="gy-3">
        <Card
          className={`h-100 ${
            this.state.selected ? "border border-warning border-3" : ""
          }`}
          style={{ height: "850px" }}
          onClick={this.toggleSelected}
        >
          <Card.Img
            variant="top"
            style={{ height: "350px" }}
            className="img-fluid"
            src={this.props.book.img}
          />
          <Card.Body className="d-flex flex-column">
            <Card.Title>{this.props.book.title}</Card.Title>
            <Button variant="primary" className="mt-auto">
              Acquista
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
