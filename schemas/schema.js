import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Documents
import article from './documents/articles/article'
import articleCategory from './documents/articles/category'
import menu from './documents/menu'
import settingsSeo from './documents/settings/seo'
import settingsFavicons from './documents/settings/favicons'
import settingsSocial from './documents/settings/social'
import settingsAnalytics from './documents/settings/analytics'

// Objects
import bodyText from './objects/bodyText'
import imageBlock from './objects/imageBlock'
import youtube from './objects/youtube'
import pageMetaData from './objects/pageMetaData'
import menuItem from './objects/menuItem'
import socialSiteFacebook from './objects/settings/facebook'
import socialSiteTwitter from './objects/settings/twitter'
import socialSiteInstagram from './objects/settings/instagram'
import socialSiteYouTube from './objects/settings/youtube'


export default createSchema({
  name: 'default',
  types: schemaTypes.concat([

    /* Documents */
    article,
    articleCategory,
    menu,
    settingsSeo,
    settingsFavicons,
    settingsSocial,
    settingsAnalytics,

    /* Objects */
    bodyText,
    imageBlock,
    youtube,
    pageMetaData,
    menuItem,
    socialSiteFacebook,
    socialSiteTwitter,
    socialSiteInstagram,
    socialSiteYouTube

  ])
})
