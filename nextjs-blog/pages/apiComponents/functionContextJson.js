import headerlink from '../api/headerlink.json'
import indexHelloNextJs from '../api/indexHelloNextJs.json'
import park from '../api/parkAPI.json'

// 把所有使用內部json的function放在這邊，這樣要重複使用呼叫不用作多餘的事情
// 但是如果是使用getStaticProps or getInitialProps or getServerSideProps or getStaticPath則無法如此使用

// API_URL為.env這個檔案中的網址來使用，普通使用的畫沒有影響，但是如果要使用image這種api匯入的話，就需要指定API_URL
export const { API_URL } = process.env

export const getHeader = () => {
  return headerlink
}

// 使用function作爲api承接內容，在上方的return中map接到的值
export const getIndexHelloNextJs = () => {
  return indexHelloNextJs
}

export const getPark = () => {
  return park
}
