import { MdPerson } from 'react-icons/lib/md'

export default {
  name: 'socialSiteInstagram',
  title: 'Instagram',
  type: 'object',
  icon: MdPerson,
  fields: [
    {
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      url: 'instagramUrl'
    },
    prepare({ url }) {
      return {
        title: 'Instagram',
        subtitle: url
      }
    }
  }
}
