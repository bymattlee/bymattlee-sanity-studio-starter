import {MdDescription} from 'react-icons/md'

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: MdDescription,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
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
      description: 'Used to determine the path of the page.',
      validation: Rule => Rule.custom(slug => {
        return slug.current === 'articles' ? 'A page has already been set with this slug.' : true
      })
    },
    {
      name: 'pageSections',
      title: 'Page Sections',
      description: 'Add, edit, and reorder sections on the page.',
      type: 'array',
      of: [
        {
          type: 'richTextSection'
        },
        {
          type: 'latestArticlesSection'
        }
      ]
    },
    {
      name: 'pageMetaData',
      title: 'Page Meta Data',
      type: 'pageMetaData',
      description:
        'All fields are optional and will overwrite any default settings when specified.'
    }
  ]
}
