import SingleBook from "./SingleBook";
import { Container, Row } from "react-bootstrap";

const BookList = function (props) {
  return (
    <Container fluid className="mt-4">
      <h1 className="text-center">Libri di tendenza</h1>
      <Row>
        {props.list.map((book) => {
          return <SingleBook key={book.asin} book={book} />;
        })}
      </Row>
    </Container>
  );
};

export default BookList;
