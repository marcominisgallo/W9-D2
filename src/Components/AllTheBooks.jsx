import { Button, Card, Col, Container, Row } from "react-bootstrap";
import libriRomantici from "../assets/books/romance.json";

const AllTheBooks = function () {
  return (
    <Container fluid className="mt-4">
      <h1 className="text-center">Libri di tendenza</h1>
      <Row>
        {libriRomantici.slice(0, 12).map((book) => {
          return (
            <Col
              key={book.asin}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={2}
              className="gy-3"
            >
              <Card className="h-100" style={{ height: "850px" }}>
                <Card.Img
                  variant="top"
                  style={{ height: "350px" }}
                  className="img-fluid"
                  src={book.img}
                />
                <Card.Body className="  d-flex flex-column">
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text className=" ">
                    Categoria: {book.category}
                  </Card.Text>
                  <Button variant="success" className=" mt-auto w-100">
                    Compra per {book.price} $
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default AllTheBooks;
