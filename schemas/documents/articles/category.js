import {MdApps} from 'react-icons/md'

export default {
  name: 'articleCategory',
  title: 'Article Category',
  type: 'document',
  icon: MdApps,
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
      description: 'Used to determine the path of the archive page.',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Used as the meta description on the archive page.',
      rows: 4
    }
  ]
}
