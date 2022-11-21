import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/Search.js";
import Header from "./components/Header.js";
import { useState } from "react";
import React from "react";
import ImageCard from "./components/ImageCard.js";
import { Container, Row, Col } from "react-bootstrap";
import Welcome from "./components/Welcome.js";

const API_URL= process.env.REACT_APP_API_URL || 'http://localhost:5050'

const App = () => {
  const [word, setWord] = useState("");
  const [images, setimages] = useState([]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    fetch(
      `${API_URL}/new-image?query=${word}`
    )
      .then((res) => res.json())
      .then((data) => {
        setimages([{ ...data, title: word }, ...images]);
      })
      .catch((err) => {
        console.log(err);
      });
    setWord("");
  };
  const handleDeleteImage = (id) => {
    setimages(images.filter((image) => image.id !== id));
  };

  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <Container className="mt-4">
        {images.length ? (
          <Row xs={1} md={2} lg={3}>
            {images.map((image, i) => (
              <Col key={i} className="pb-3">
                {" "}
                <ImageCard deleteImage={handleDeleteImage} image={image} />
              </Col>
            ))}
          </Row>
        ) : (
          <Welcome />
        )}
      </Container>
    </div>
  );
};

export default App;
