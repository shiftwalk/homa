import React from 'react'
import SanityPageService from '@/services/sanityPageService'
import BlogBody, { query, articlesPerPage } from '@/components/blog-body';

const pageService = new SanityPageService(query)

export default function News(initialData) {
  const { data: { blog, categories, numberOfArticles, contact }  } = pageService.getPreviewHook(initialData, { start: 0, stop: articlesPerPage })()

  return <BlogBody blog={blog} categories={categories} index={1} numberOfArticles={numberOfArticles} contact={contact} />
}

export async function getStaticProps(context) {

  const cms = await pageService.fetchQuery(
    { params: { start: 0, stop: articlesPerPage }}
  )

  return cms
}