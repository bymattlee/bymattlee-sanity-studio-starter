import {MdPerson} from 'react-icons/md'

export default {
  name: 'socialSiteTwitter',
  title: 'Twitter',
  type: 'object',
  icon: MdPerson,
  fields: [
    {
      name: 'twitterUrl',
      title: 'Twitter URL',
      type: 'url',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      url: 'twitterUrl'
    },
    prepare ({url}) {
      return {
        title: 'Twitter',
        subtitle: url
      }
    }
  }
}
