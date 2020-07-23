import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import { wordCapitalize } from '../../styles/utilStyle.js'
import { API_URL } from './functionContextJson.js'
import { ListGroup } from 'react-bootstrap'

// headers由外部傳入
const HeaderJson = ({ headers }) => {
  // API_URL為.env這個檔案中的網址來使用，雖然在這邊並沒有影響，但是如果要使用image這種api匯入的話，就需要指定API_URL
  // const { API_URL } = process.env
  console.log(headers)

  return (
    <>
      <ListGroup variant="flush">
        <ListGroup.Item className='bg-light'>
          {
            !headers ? 'Loading ...' :
            headers.map(header => (
              <Link href={header.url} key={header.id}>
                <a className="nav-item nav-link" style={wordCapitalize} title={`Connect to ${header.title} Page`}>{header.title}</a>
              </Link>
            ))
          }
        </ListGroup.Item>
      </ListGroup>
    </>
  )
}

export default HeaderJson
