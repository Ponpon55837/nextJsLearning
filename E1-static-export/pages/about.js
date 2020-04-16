import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

const About = ({ stars }) => {
  return (
    <Layout>
      <h1>This is the about page</h1>
      <ul className="list-group">
        <li className="list-group-item">
          <h3>{stars.svn_url}</h3>
          <a href={stars.subscribers_url}>{stars.homepage}</a>
        </li>
      </ul>
    </Layout>
  )
}

About.getInitialProps = async function ({ req }) {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    stars: data
  }
}

export default About
