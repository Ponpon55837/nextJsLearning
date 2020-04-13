import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

const About = (props) => {
  return (
    <Layout>
      <h1>This is the about page</h1>
      <ul className="list-group">
        {
          props.data.map(data => (
            <li className="list-group-item" key={data.id}>
              <h3>{data.title}</h3>
              <h3><a href={data.url}>{data.thumbnailUrl}</a></h3>
            </li>
          ))
        }
      </ul>
    </Layout>
  )
}

About.getInitialProps = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    data
  }
}


export default About
