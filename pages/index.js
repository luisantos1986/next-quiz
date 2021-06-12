import Head from 'next/head'
import ArticleList from '../components/ArticleList'

export default function Home({articles}) {
  return (
    <div>
      <Head>
        <title>Question Forms</title>
        <meta name='keywords' content='web development'/>
      </Head>
      <h1>Im the home page</h1>
    </div>
  )
}
