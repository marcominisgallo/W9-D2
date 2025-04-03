import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Container, Form, Row } from "react-bootstrap";

class BookList extends Component {
  state = {
    search: "", // il valore del campo di ricerca
  };

  render() {
    return (
      <Container fluid className="mt-4">
        <h1 className="text-center">Libri di tendenza</h1>
        <Row className="justify-content-center my-5">
          <Col xs={12} md={6}>
            <Form.Control
              type="text"
              placeholder="cerca un libro"
              value={this.state.search}
              onChange={(e) => {
                this.setState({
                  search: e.target.value,
                });
              }}
            />
          </Col>
        </Row>
        <Row>
          {this.props.list
            .filter((book) => {
              if (
                book.title
                  .toLowerCase()
                  .includes(this.state.search.toLowerCase())
              ) {
                return true;
              } else {
                return false;
              }
            })
            .map((book) => {
              return <SingleBook key={book.asin} book={book} />;
            })}
        </Row>
      </Container>
    );
  }
}

export default BookList;
