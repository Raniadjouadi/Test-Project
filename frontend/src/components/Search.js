import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
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
          
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
