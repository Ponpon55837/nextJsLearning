import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => {
  // 這邊import了 Header所以才能在畫面顯示Header中的內容
  return (
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
  )
}

export default Layout
