import React, { useEffect, useState } from 'react'
import { Container, Row, Spinner, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getNews, searchAndSortBy, searchEverything } from '../../store/actions/newsActions'
import Header from '../UI/Header'
import HeadLineCard from '../UI/HeadLineCard'
import './FrontPage.css'


function FrontPage() {
  const dispatch = useDispatch()
  const newsList = useSelector(state => state.newsList)
  const { loading, error, news } = newsList
  const articles = news.articles

  const [showShowMoreBtn, setShowMoreBtn] = useState(true)
  const [searchText, setSearchText] = useState('')
  const [showSorting, setShowSorting] = useState(false)
  const [sortingValue, setSortingValue] = useState("publishedAt")


  var pageSize = 20
  useEffect(() => {
    dispatch(getNews(pageSize))
  }, [dispatch])


  const increasePageSize = () => {
    dispatch(getNews(pageSize + 20))
  }

  const submitSearchForm = (e) =>{
    e.preventDefault()
    var encodedSearchText = encodeURIComponent(searchText)
    dispatch(searchEverything(encodedSearchText))
    setShowSorting(true)
    setShowMoreBtn(false)
  }

  const onChangeSortingValue = () =>{
    console.log('Checking on changing state ', searchText)
    console.log('Sorting Value: ', sortingValue)
    var encodedSearchText = encodeURIComponent(searchText)
    dispatch(searchAndSortBy(encodedSearchText, sortingValue))
  }

  console.log('Default page size: ', pageSize)
  return (
    <>
      <Header />

      <Container>
        <Row className='bg-light p-4 rounded mt-5'>
          <div className='d-flex flex-column justify-content-center text-center align-items-center'>
            <h1>Search posts</h1>
            <Form onSubmit={submitSearchForm} className='searchForm'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control placeholder="Enter title, description or author" onChange={(e) => setSearchText(e.target.value)} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </Row>
      </Container>

      {showSorting &&
        <Container className='mt-3'>
          <div className='d-flex justify-content-end align-items-center sort-container'>
            <h4 className='my-0'>Sort by:</h4>
            <form className='mx-3 form-sortby'>
              <select value={sortingValue} onChange={e=>setSortingValue(e.target.value)} className='dropdown-sortby'>
                <option value="relevancy">Relevancy</option>
                <option value="popularity">Popularity</option>
                <option value="publishedAt">Published date</option>
              </select>
            </form>
            <Button onClick={onChangeSortingValue} style={{minWidth: "120px"}}>Sort</Button>
          </div>
        </Container>
      }

      {loading ? <Spinner className="defaultSpinner" animation="grow" /> : error ? error.message : articles.length < 1 ? <h1 className='text-center mt-5'>There are no results</h1> 
        : <Container>
          <Row>
            {articles.map(n => <HeadLineCard key={Math.random()} newsData={n} />)}
          </Row>
          {showShowMoreBtn &&
            <Row>
              <Button className='mb-5 w-25 mx-auto' onClick={increasePageSize}>Load More</Button>
            </Row>
          }
        </Container>
      }

    </>
  )
}

export default FrontPage