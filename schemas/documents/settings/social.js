import {MdPeople} from 'react-icons/md'

export default {
  name: 'settingsSocial',
  title: 'Social',
  type: 'document',
  icon: MdPeople,
  fields: [
    {
      name: 'socialSites',
      title: 'Social Sites',
      type: 'array',
      description:
        'Add and organize the appropriate social media icons and links that will be used in the header, mobile menu and footer.',
      of: [
        {
          type: 'socialSiteFacebook'
        },
        {
          type: 'socialSiteTwitter'
        },
        {
          type: 'socialSiteInstagram'
        },
        {
          type: 'socialSiteYouTube'
        }
      ]
    },
    {
      name: 'twitterHandle',
      title: 'Twitter Handle',
      type: 'string',
      description: 'Used to populate the Twitter cards meta tags. Include @.'
    }
  ]
}
