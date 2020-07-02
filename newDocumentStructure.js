import S from '@sanity/desk-tool/structure-builder'

const hiddenDocTypes = listItem =>
  !['siteSettingsGeneral', 'siteSettingsSocial', 'siteSettingsAnalytics'].includes(listItem.getId())

export default [
  ...S.defaultInitialValueTemplateItems().filter(hiddenDocTypes)
]
