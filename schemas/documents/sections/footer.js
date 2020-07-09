import {MdViewAgenda} from 'react-icons/md'

export default {
  name: 'sectionsFooter',
  title: 'Footer',
  type: 'document',
  icon: MdViewAgenda,
  fields: [
    {
      name: 'footerMenu',
      title: 'Footer Menu',
      type: 'reference',
      description: 'Select the menu that will be used in the footer.',
      to: [
        {
          type: 'menu'
        }
      ]
    }
  ]
}
