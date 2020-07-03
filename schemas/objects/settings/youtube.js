import MdPerson from 'react-icons/lib/md/person'

export default {
  name: 'socialSiteYouTube',
  title: 'YouTube',
  type: 'object',
  icon: MdPerson,
  fields: [
    {
      name: 'youtubeUrl',
      title: 'YouTube URL',
      type: 'url',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      url: 'youtubeUrl'
    },
    prepare({ url }) {
      return {
        title: 'YouTube',
        subtitle: url
      }
    }
  }
}
