export default {
  name: 'siteSettingsSocial',
  title: 'Social',
  type: 'document',
  fields: [
    {
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url'
    },
    {
      name: 'facebookUrl',
      title: 'Facebook URL',
      type: 'url'
    },
    {
      name: 'twitterUrl',
      title: 'Twitter URL',
      type: 'url'
    },
    {
      name: 'twitterHandle',
      title: 'Twitter Handle',
      type: 'string',
      description: 'Include @'
    }
  ]
}
