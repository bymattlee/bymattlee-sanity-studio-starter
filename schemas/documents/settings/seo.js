import {MdBuild} from 'react-icons/md'

export default {
  name: 'settingsSeo',
  title: 'SEO',
  type: 'document',
  icon: MdBuild,
  fields: [
    {
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      description: 'Used in meta tags and page titles for SEO.'
    },
    {
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      description:
        'Used as the default meta description when one is not specified on a page for SEO.',
      rows: 4,
      validation: Rule => Rule.max(150)
    },
    {
      name: 'siteShareImage',
      title: 'Site Share Image',
      type: 'image',
      description:
        'Used as the default share image when one is not specified on a page. Recommended size: 1200x630px'
    }
  ]
}
