import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import ListGroup from 'react-bootstrap/ListGroup'

const HeaderJson = ({ headers}) => {
  const { API_URL } = process.env
  console.log(headers)

  return (
    <>
      <ListGroup variant="flush">
        <ListGroup.Item>
          {
            headers ? headers.map(header => (
              <Link href={header.url} key={header.id}>
                <a className="nav-item nav-link" style={wordCapitalize}>{header.title}</a>
              </Link>
            ))
            : 'Loading ...'
          }
        </ListGroup.Item>
      </ListGroup>
    </>
  )
}

const wordCapitalize = {
  textTransform: "capitalize"
}

export default HeaderJson
