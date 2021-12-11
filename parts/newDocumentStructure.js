import S from '@sanity/desk-tool/structure-builder'

const hiddenDocTypes = listItem =>
  ![
    'media.tag',
    'sectionsHeader',
    'sectionsFooter',
    'settingsSeo',
    'settingsFavicons',
    'settingsSocial',
    'settingsAnalytics'
  ].includes(listItem.getId())

export default [...S.defaultInitialValueTemplateItems().filter(hiddenDocTypes)]
