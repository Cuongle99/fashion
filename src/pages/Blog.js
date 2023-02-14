import React, {useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Breadcrumb from '../components/Breadcrumb'
import Footer from '../components/Footer'
import Header from '../components/Header'
import BlogItem from '../components/BlogItem'

export default function Blog() {

  const listBlog = useSelector(state => state.blogReducer.data)

  useEffect(() => {
    window.scrollTo({
        top: 0, behavior: "smooth"
    })
});
  
  return (
    <>
      <Header/>
      <Breadcrumb data={'Blog List'}/>
      <Container>
        <Row>
          {listBlog && Object.keys(listBlog).map(key => {
            return <Col sm={3} key={key}> <BlogItem data={listBlog[key]} id={key} /> </Col>
          })}
        </Row>
      </Container>
      <Footer />
    </>
  )
}
