import {MdShowChart} from 'react-icons/md'

export default {
  name: 'settingsAnalytics',
  title: 'Analytics',
  type: 'document',
  icon: MdShowChart,
  fields: [
    {
      name: 'googleAnalyticsId',
      title: 'Google Analytics ID',
      type: 'string',
      description: 'Format: XX-XXXXXXXX-XX'
    }
  ]
}
