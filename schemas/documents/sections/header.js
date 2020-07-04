import { MdViewAgenda } from 'react-icons/lib/md'

export default {
  name: 'sectionsHeader',
  title: 'Header',
  type: 'document',
  icon: MdViewAgenda,
  fields: [
    {
      name: 'headerMenu',
      title: 'Header Menu',
      type: 'array',
      description: 'Select the menu that will be used in the header.',
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
