import '../styles/global.css'

// 這邊Component會把 pageProps的內容接進來，例如你現在打開firstpost page 就會顯示firstpost內容
const App = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default App
