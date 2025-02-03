import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useNews } from './NewsContext';
import { Card, Button, Container } from 'react-bootstrap';

function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const news = useNews()[id];

  if (!news) return <p>Noticia no encontrada</p>;

  return (
    <Container className="my-4">
      <Card>
        <Card.Body>
          <Card.Title>{news.titulo}</Card.Title>
          <Card.Text>{news.contenido}</Card.Text>
          <Card.Text><strong>Categoría:</strong> {news.categoria}</Card.Text>
          <Card.Text><strong>Autor:</strong> {news.autor}</Card.Text>
          <Card.Text><strong>Fecha:</strong> {news.fecha}</Card.Text>
          <Button variant="primary" onClick={() => navigate('/')}>Volver</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default NewsDetail;
