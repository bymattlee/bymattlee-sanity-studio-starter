import { DateTime } from 'luxon'

export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published At'
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4
    },
    {
      name: 'body',
      title: 'Body',
      type: 'bodyText'
    },
    {
      name: 'ArticleMetaData',
      title: 'Article Meta Data',
      type: 'pageMetaData'
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      media: 'featuredImage'
    },
    prepare ({ title = 'No title', publishedAt, media }) {
      return {
        title,
        subtitle: DateTime.fromISO(publishedAt).toFormat('LLL dd, yyyy'),
        media
      }
    }
  }
}
