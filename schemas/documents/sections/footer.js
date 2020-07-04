import { MdViewAgenda } from 'react-icons/lib/md'

export default {
  name: 'sectionsFooter',
  title: 'Footer',
  type: 'document',
  icon: MdViewAgenda,
  fields: [
    {
      name: 'footerMenu',
      title: 'Footer Menu',
      type: 'array',
      description: 'Select the menu that will be used in the footer.',
      validation: Rule => Rule.max(1),
      of: [
        {
          type: 'reference',
          icon: MdViewAgenda,
          to: [{ type: 'menu' }],
          weak: true
        }
      ]

    }
  ]
}
