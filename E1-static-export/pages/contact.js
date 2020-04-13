import Layout from '../components/MyLayout'
import fetch from 'isomorphic-unfetch'
import park from './api/parkAPI.json'

const Contact = (props) => {
  return (
    <Layout>
      <h1>Contacts</h1>
      {
        getPosts().map(park => (
          <div className="card" key={park.areaId} park={park} style={parkStyle}>
            <div className="card-header">
              <h2>{park.areaName}</h2>
            </div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>{park.payGuide}</p>
                <footer className="blockquote-footer">
                  {park.introduction}
                  <cite title="Source Title">-({park.address})</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        ))
      }
    </Layout>
  )
}

const getPosts = () => {
  return park
}

const parkStyle = {
  margin:'10px 0 10px 0'
}

export default Contact
