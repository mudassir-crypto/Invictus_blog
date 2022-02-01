import React from 'react'
import { getCategoryPosts, getCategories } from '../../services'
import { Categories, Loader, PostCard, PostWidget } from '../../components'
import { useRouter } from 'next/router'

const CategoryPosts = ({ posts }) => {

  const router = useRouter

  if(router.isFallback){
    return <Loader />
  }

  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post) => (
            <PostCard key={post.node.createdAt} post={post.node} />
          ))}
        </div>

        <div className="col-span-1 lg:col-span-4">
          <PostWidget />
          <Categories />
        </div>
      </div>
    </div>
  )
}
export default CategoryPosts

export async function getStaticProps({ params }) {
  const data = (await getCategoryPosts(params.slug)) || []
  
  return {
    props: { posts: data }
  }
}

export async function getStaticPaths() {
  const categories = await getCategories()

  return {
    paths: categories.map(({ slug }) => ({params: { slug }})),
    fallback: true
  }
}
