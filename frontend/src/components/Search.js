import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";

const Search = ({ word, setWord, handleSubmit }) => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form onSubmit={handleSubmit}>
            <FormControl
              type="text"
              value={word}
              onChange={(e) => setWord(e.target.value)}
              placeholder="Search image..."
            />
          </Form>
          <br></br>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
