import {DateTime} from 'luxon'
import {MdCreate} from 'react-icons/md'

export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  icon: MdCreate,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Titles should be catchy, descriptive, and not too long.',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      description: 'Used to determine the path of the post.',
      validation: Rule => Rule.required()
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published At',
      description: 'Can be used to schedule post for publishing.',
      validation: Rule => Rule.required()
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Categories',
      description: 'Will organize the article into groups.',
      of: [
        {
          type: 'reference',
          icon: MdCreate,
          to: [
            {
              type: 'articleCategory'
            }
          ],
          weak: true
        }
      ]
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      description:
        'Will be displayed at the top of the article detail page and used for the social share image.',
      fields: [
        {
          name: 'alternativeText',
          type: 'string',
          title: 'Alternative Text',
          description: 'Used for SEO and accessiblity.',
          options: {
            isHighlighted: true
          }
        }
      ]
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'Will be used in the article preview component.',
      rows: 4
    },
    {
      name: 'mainContent',
      title: 'Main Content',
      type: 'richTextBlock'
    },
    {
      name: 'articleMetaData',
      title: 'Article Meta Data',
      type: 'pageMetaData',
      description:
        'All fields are optional and will overwrite any default settings when specified.'
    }
  ],
  initialValue: {
    publishedAt: new Date().toISOString()
  },
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing Date New–>Old',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing Date Old->New',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      media: 'featuredImage',
      description: 'excerpt'
    },
    prepare ({title = 'No title', publishedAt, media, description}) {
      return {
        title,
        subtitle: publishedAt
          ? DateTime.fromISO(publishedAt).toFormat('LLL dd, yyyy')
          : '',
        media,
        description
      }
    }
  }
}
