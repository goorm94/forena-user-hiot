import Container from '../components/container'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import { getAllPosts } from '../lib/api'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'


export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  return (
    <>
      <PageSEO
          title={siteMetadata.title}
          description={siteMetadata.description}
      />
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
        </Container>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'iosImage',
    'andImage'
  ])

  return {
    props: { allPosts },
  }
}
