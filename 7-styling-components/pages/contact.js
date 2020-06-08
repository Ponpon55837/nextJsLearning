import Layout from '../components/MyLayout'
import fetch from 'isomorphic-unfetch'

const Contact = (props) => {
  return (
    <Layout>
      <h1>Contacts</h1>
      <p>This is the contact page</p>
    </Layout>
  )
  // <h1>{props.show.name}</h1>
  // <p>{props.show.id}</p>
  // <p>{props.show.phone}</p>
}

// // 藉由fetch來抓取api中對應的id頁面並將值接入
// Contact.getInitialProps = async function(context) {
//   const { id } = context.query
//   const res = await fetch('https://vuetest-69b45.firebaseapp.com/json/contact.json')
//   const show = await res.json()
//
//   console.log(`Fetched show: ${show.name}`)
//
//   return { show }
// }

export default Contact
