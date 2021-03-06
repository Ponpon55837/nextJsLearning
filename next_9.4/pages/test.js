import React, { useState } from 'react'
import Layout from '../components/layout'
import Head from 'next/head'
import { CourseJson, ProductJson, CategoryJson } from './apiComponents/contextJson.js'
import { titleDescription, h1Mapping, pageDescription, API_URL } from './apiComponents/functionContextJson.js'
import utilStyles from '../styles/utils.module.css'
// bootstrap
import { Col, Row, Container } from 'react-bootstrap'

const Test = ({courses, products, categories, title = 'Courses show menu', h1_id = 6, arr_id = 6}) => {
  // const [isOpen, setIsOpen] = useState(false)

  // 當api抓取到值之後，props把接到的值map進li當中
  // 這裡href為pages/p/[id].js但是後面使用as來代替為api中的id值
  return (
    <>
      <Head>
        <title>{title + '.   ' + titleDescription()}</title>
        <meta property="og:description" content={ !courses + !products + !categories ?  pageDescription() : courses.map(course => (course.title)) + '.' + pageDescription() }/>
      </Head>
      <Layout>
        <Container fluid>
          <Row>
            <Col className='d-none d-sm-none d-md-block' md={1} lg={1} xl={1}>
            </Col>
            <Col xs={12} sm={12} md={10} lg={10} xl={10}>
              { !h1Mapping() ? null : h1Mapping(h1_id, arr_id) }
              <CourseJson courses={courses} />
              <ProductJson products={products} />
              <CategoryJson categories={categories} />
            </Col>
            <Col className='d-none d-sm-none d-md-block' md={1} lg={1} xl={1}></Col>
          </Row>
        </Container>
      </Layout>
    </>
  )
}

// es6的function async寫法
// es5寫成 export async function getStaticProps(){}
// 只有在node.js run npm start時候用getInitialProps才會及時render，放到apache or nginx就要重新build 跟 export
export const getStaticProps = async ({ start_num = 2, limit_num = 3 }) => {
  // 從functionContextJson引入API_URL來使用
  const res_course = await fetch(`${API_URL}/courses`)
  const res_product = await fetch(`${API_URL}/products`)
  // 只抓取特定頁面的話可以用/categories?_start=4&_limit=1
  const res_category = await fetch(
    `${API_URL}/categories?_start=${start_num}&_limit=${limit_num}`)

  const data_course = await res_course.json()
  const data_product = await res_product.json()
  const data_category = await res_category.json()

  return {
    props: {
      courses: data_course ,
      products: data_product ,
      categories: data_category
    }
  }
}

export default Test
