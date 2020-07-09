import {MdViewAgenda} from 'react-icons/md'

export default {
  name: 'sectionsHeader',
  title: 'Header',
  type: 'document',
  icon: MdViewAgenda,
  fields: [
    {
      name: 'headerMenu',
      title: 'Header Menu',
      type: 'reference',
      description: 'Select the menu that will be used in the header.',
      to: [
        {
          type: 'menu'
        }
      ]
    }
  ]
}
