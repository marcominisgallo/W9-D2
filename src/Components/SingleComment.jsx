import { ListGroup } from "react-bootstrap";

const SingleComment = (props) => {
  return (
    <ListGroup.Item>
      <strong>{props.comment.rate} - </strong>
      <small>{props.comment.comment} </small>
    </ListGroup.Item>
  );
};

export default SingleComment;
