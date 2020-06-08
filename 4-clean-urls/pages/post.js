import { useRouter } from 'next/router'
import Layout from '../components/MyLayout'

// 使用router把title值從Layout接進來
const Content = () => {
  const router = useRouter()

  return (
    <div>
      <h1>{router.query.title}</h1>
      <p>This is the blog post content.</p>
    </div>
  )
}

const Page = () => {
  return (
    <Layout>
      <Content />
    </Layout>
  )
}

export default Page
