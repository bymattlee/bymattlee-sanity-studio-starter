import {MdPerson} from 'react-icons/md'

export default {
  name: 'socialSiteFacebook',
  title: 'Facebook',
  type: 'object',
  icon: MdPerson,
  fields: [
    {
      name: 'facebookUrl',
      title: 'Facebook URL',
      type: 'url',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      url: 'facebookUrl'
    },
    prepare ({url}) {
      return {
        title: 'Facebook',
        subtitle: url
      }
    }
  }
}
