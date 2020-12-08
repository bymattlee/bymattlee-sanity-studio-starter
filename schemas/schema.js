import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Documents
import page from './documents/page'
import article from './documents/articles/article'
import articleCategory from './documents/articles/category'
import sectionsHeader from './documents/sections/header'
import sectionsFooter from './documents/sections/footer'
import menu from './documents/menu'
import settingsSeo from './documents/settings/seo'
import settingsFavicons from './documents/settings/favicons'
import settingsSocial from './documents/settings/social'
import settingsAnalytics from './documents/settings/analytics'

// Objects
import richTextBlock from './objects/blocks/richText'
import imageBlock from './objects/blocks/image'
import youtubeBlock from './objects/blocks/youtube'
import vimeoBlock from './objects/blocks/vimeo'
import richTextSection from './objects/sections/richText'
import latestArticlesSection from './objects/sections/latestArticles'
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
    page,
    article,
    articleCategory,
    sectionsHeader,
    sectionsFooter,
    menu,
    settingsSeo,
    settingsFavicons,
    settingsSocial,
    settingsAnalytics,

    /* Objects */
    richTextBlock,
    imageBlock,
    youtubeBlock,
    vimeoBlock,
    richTextSection,
    latestArticlesSection,
    pageMetaData,
    menuItem,
    socialSiteFacebook,
    socialSiteTwitter,
    socialSiteInstagram,
    socialSiteYouTube
  ])
})
