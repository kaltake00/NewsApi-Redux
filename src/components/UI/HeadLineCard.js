import React from 'react'
import { Col } from 'react-bootstrap';
import NewsDefaultImage from './news-default-image.jpg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './HeadLineCard.css'
import {useNavigate} from 'react-router-dom';

function HeadLineCard(props) {


  const navigate = useNavigate();
  const detailsPage = () => {
    navigate(`/article`, {state: props.newsData})
  }

  return (
    <Col md={4} sm={6} className="p-4">
      <Card style={{ width: '100%', height: '100%'}}>
      {props.newsData.urlToImage ? (
          <Card.Img variant="top" src={props.newsData.urlToImage} style={{height: '250px'}} />
        ) : (
          <div
            className='urlImage'
            style={{ backgroundImage: `url(${NewsDefaultImage})` }}
          />
        )}
        <Card.Body className='d-flex flex-column justify-content-between'>
          <div>
            <Card.Title className='newsCard-title'>{props.newsData.title}</Card.Title>
            <Card.Text className='newsCard-description'>
              {props.newsData.description}
            </Card.Text>
          </div>
          <Button variant="primary" className='mt-3' onClick={detailsPage}>Read full article</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default HeadLineCard