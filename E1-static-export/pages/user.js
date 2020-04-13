import Layout from '../components/MyLayout'
import fetch from 'isomorphic-unfetch'
import userindex from './api/user.json'

const UserIndex = (props) => {
  return (
    <Layout>
      <h1>UserIndex</h1>
      {
        getPosts().map(userindex => (
          <div className="card" key={userindex.id} userindex={userindex} style={userStyle}>
            <div className="card-header">
              <h2>{userindex.name}</h2>
            </div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>{userindex.eamil}</p>
                <footer className="blockquote-footer">
                  {userindex.videos.likes}
                  <cite title="Source Title">-({userindex.description})</cite>
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
  return userindex
}

const userStyle = {
  margin:'10px 0 10px 0'
}

export default UserIndex
