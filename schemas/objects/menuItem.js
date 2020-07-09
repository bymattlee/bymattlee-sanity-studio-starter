import {MdCreate} from 'react-icons/md'

export default {
  name: 'menuItem',
  title: 'Menu Item',
  type: 'object',
  icon: MdCreate,
  fields: [
    {
      name: 'menuItemName',
      title: 'Menu Item Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'menuItemUrl',
      title: 'Menu Item URL',
      type: 'string',
      description: "Add a relative path for internal links. Example: '/about/'",
      validation: Rule => Rule.required()
    },
    {
      name: 'openInNewTab',
      title: 'Open In New Tab?',
      description: 'Set to true if this link should open in a new tab.',
      type: 'boolean'
    }
  ],
  preview: {
    select: {
      title: 'menuItemName',
      subtitle: 'menuItemUrl',
      openInNewTab: 'openInNewTab'
    },
    prepare ({title, subtitle, openInNewTab}) {
      return {
        title: `${title}${openInNewTab ? ' (External)' : ''}`,
        subtitle
      }
    }
  }
}
