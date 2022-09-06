
import { Col, Container, Row } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import './SingleArticle.css'
import Header from '../UI/Header'

function SingleArticle() {
  const location = useLocation()
  return (
    <>
      <Header />
      <div>
        {/* Here goes banner */}
        <div className='singleArticle--banner  d-flex'>
          <Container>
            <Row className='text-white text-center'>
              <h1>{location.state.title}</h1>
              <p>{location.state.description}</p>
            </Row>
            <div className='text-white text-center mt-3 d-flex justify-content-center'>
              <p><b>Author:</b> {location.state.author}</p>
              <p className='mx-4'><b>Published at:</b> {location.state.publishedAt}</p>
            </div>
          </Container>
        </div>
        {/* Here goes body */}
        <Container>
          <Row className='mt-5'>
            <Col>
              <div className='bg-light rounded d-flex flex-column justify-content-between p-3'>
                <img src={location.state?.urlToImage} alt={location.state.title}></img>
              </div>
            </Col>
          </Row>
          <Row className='bg-light rounded mt-4 mb-5 p-3'>
            <p>{location.state.content}</p>
          </Row>
        </Container>
      </div>

    </>

  )
}

export default SingleArticle