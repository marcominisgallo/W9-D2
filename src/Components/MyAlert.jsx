import { Alert } from "react-bootstrap";

const MyAlert = function () {
  return (
    <Alert variant="success" className="text-center border-3 mb-0 mt-1">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>You are welcome on my website of books.</p>
      <hr />
      <p className="mb-0">Enjoy!</p>
    </Alert>
  );
};
export default MyAlert;
