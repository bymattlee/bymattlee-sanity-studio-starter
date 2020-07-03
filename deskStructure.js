import S from '@sanity/desk-tool/structure-builder'
import MdSettings from 'react-icons/lib/md/settings'
import MdLanguage from 'react-icons/lib/md/language'
import MdBuild from 'react-icons/lib/md/build'
import MdPeople from 'react-icons/lib/md/people'
import MdShowChart from 'react-icons/lib/md/show-chart'

const hiddenDocTypes = listItem =>
  !['settingsSeo', 'settingsFavicons', 'settingsSocial', 'settingsAnalytics'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      ...S.documentTypeListItems().filter(hiddenDocTypes),
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.list()
            .title('Settings')
            .items([
              S.listItem()
                .title('SEO')
                .icon(MdBuild)
                .child(
                  S.editor()
                    .title('SEO')
                    .id('settingsSeo')
                    .schemaType('settingsSeo')
                    .documentId('settingsSeo')
                ),
              S.listItem()
                .title('Favicons')
                .icon(MdLanguage)
                .child(
                  S.editor()
                    .title('Favicons')
                    .id('settingsFavicons')
                    .schemaType('settingsFavicons')
                    .documentId('settingsFavicons')
                ),
              S.listItem()
                .title('Social')
                .icon(MdPeople)
                .child(
                  S.editor()
                    .title('Social')
                    .id('settingsSocial')
                    .schemaType('settingsSocial')
                    .documentId('settingsSocial')
                ),
              S.listItem()
                .title('Analytics')
                .icon(MdShowChart)
                .child(
                  S.editor()
                    .title('Analytics')
                    .id('settingsAnalytics')
                    .schemaType('settingsAnalytics')
                    .documentId('settingsAnalytics')
                )
            ])
        )
    ])
