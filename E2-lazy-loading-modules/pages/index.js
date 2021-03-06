import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import loadDB from '../lib/load-db'


const PostLink = (props) => {
  return (
    <li>
      <Link href="/p/[id]" as={`/p/${props.id}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  )
}

const Index = ({ stories }) => {
  return (
    <Layout>
      <h1>Hacker News - Latest</h1>
      <ul>
        {stories.map(story => (
          <PostLink key={story.id} id={story.id} title={story.title} />
        ))}
      </ul>
    </Layout>
  )
}

// 從loadDB路徑把從firebase的內容load進來
Index.getInitialProps = async function() {
  const db = await loadDB()

  const ids = await db.child('topstories').once('value')
  let stories = await Promise.all(
    ids
      .val()
      .slice(0, 10)
      .map(id =>
        db
          .child('item')
          .child(id)
          .once('value')
      )
  )

  stories = stories.map(s => s.val())

  return { stories }
}

export default Index
