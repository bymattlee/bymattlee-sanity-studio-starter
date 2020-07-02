export default {
  name: 'pageMetaData',
  title: 'Page Meta Data',
  type: 'object',
  fields: [
    {
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string'
    },
    {
      name: 'pageDescription',
      title: 'Page Description',
      type: 'text',
      rows: 4
    },
    {
      name: 'pageShareImage',
      title: 'Page Share Image',
      type: 'image'
    }
  ]
}
