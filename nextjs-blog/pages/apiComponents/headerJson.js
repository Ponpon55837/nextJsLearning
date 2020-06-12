import fetch from 'isomorphic-unfetch'
import { wordCapitalize } from '../../styles/utilStyle.js'
import Link from 'next/link'
import ListGroup from 'react-bootstrap/ListGroup'

// headers由外部傳入
const HeaderJson = ({ headers}) => {
  // API_URL為.env這個檔案中的網址來使用，雖然在這邊並沒有影響，但是如果要使用image這種api匯入的話，就需要指定API_URL
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

export default HeaderJson
