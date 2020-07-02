import S from '@sanity/desk-tool/structure-builder'
import MdCreate from 'react-icons/lib/md/create'
import MdSettings from 'react-icons/lib/md/settings'
import MdPeople from 'react-icons/lib/md/people'
import MdShowChart from 'react-icons/lib/md/show-chart'

const hiddenDocTypes = listItem =>
  !['siteSettingsGeneral', 'siteSettingsSocial', 'siteSettingsAnalytics'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Articles')
        .icon(MdCreate)
        .child(S.documentTypeList('article').title('Articles')),
      S.divider(),
      S.listItem()
        .title('Site Settings')
        .icon(MdSettings)
        .child(
          S.list()
            .title('Site Settings')
            .items([
              S.listItem()
                .title('General')
                .icon(MdSettings)
                .child(
                  S.editor()
                    .title('General')
                    .id('siteSettingsGeneral')
                    .schemaType('siteSettingsGeneral')
                    .documentId('siteSettingsGeneral')
                ),
              S.listItem()
                .title('Social')
                .icon(MdPeople)
                .child(
                  S.editor()
                    .title('Social')
                    .id('siteSettingsSocial')
                    .schemaType('siteSettingsSocial')
                    .documentId('siteSettingsSocial')
                ),
              S.listItem()
                .title('Analytics')
                .icon(MdShowChart)
                .child(
                  S.editor()
                    .title('Analytics')
                    .id('siteSettingsAnalytics')
                    .schemaType('siteSettingsAnalytics')
                    .documentId('siteSettingsAnalytics')
                )
            ])
        )
    ])
