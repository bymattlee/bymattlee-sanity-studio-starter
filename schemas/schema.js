import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Documents
import article from './documents/article'
import siteSettingsGeneral from './documents/siteSettingsGeneral'
import siteSettingsSocial from './documents/siteSettingsSocial'
import siteSettingsAnalytics from './documents/siteSettingsAnalytics'

// Objects
import bodyText from './objects/bodyText'
import pageMetaData from './objects/pageMetaData'


export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    /* Documents */
    article,
    siteSettingsGeneral,
    siteSettingsSocial,
    siteSettingsAnalytics,

    /* Objects */
    bodyText,
    pageMetaData

  ])
})
