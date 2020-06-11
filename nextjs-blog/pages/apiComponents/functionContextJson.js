import headerlink from '../api/headerlink.json'
import indexHelloNextJs from '../api/indexHelloNextJs.json'
import park from '../api/parkAPI.json'

// 把所有使用內部json的function放在這邊，這樣要重複使用呼叫不用作多餘的事情
// 但是如果是使用getStaticProps or getInitialProps or getServerSideProps or getStaticPath則無法如此使用

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
