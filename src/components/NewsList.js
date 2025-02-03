
import React from 'react';
import { Link } from 'react-router-dom';
import { useNews } from './NewsContext';
import { Container, ListGroup } from 'react-bootstrap';

function NewsList() {
  const newsData = useNews();

  return (
    <Container className="my-4">
      <h2>Listado de noticias</h2>
      <ListGroup>
        {newsData.map((news, index) => (
          <ListGroup.Item key={index}>
            <Link to={`/news/${index}`}>{news.titulo}</Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default NewsList;