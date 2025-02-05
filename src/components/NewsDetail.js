import React from 'react';
import { useNews } from './NewsContext';
import { Card, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NewsDetail(props) {
  const newsData = useNews();
  const id = props.id;
  const news = newsData[id];

  return (
    <Container className="my-4">
      <Card>
        <Card.Body>
          <Card.Title>{news.titulo}</Card.Title>
          <Card.Text>{news.contenido}</Card.Text>
          <Card.Text><strong>Categoría:</strong> {news.categoria}</Card.Text>
          <Card.Text><strong>Autor:</strong> {news.autor}</Card.Text>
          <Card.Text><strong>Fecha:</strong> {news.fecha}</Card.Text>
          <Button variant="primary" as={Link} to="/">Volver</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default NewsDetail;