import {MdLanguage} from 'react-icons/md'

export default {
  name: 'settingsFavicons',
  title: 'Favicons',
  type: 'document',
  icon: MdLanguage,
  fields: [
    {
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      description:
        'Used for the icon that appears in the address bar of the web browser. Recommended size, extension: 800x800px, .png'
    },
    {
      name: 'appleTouchIcon',
      title: 'Apple Touch Icon',
      type: 'image',
      description:
        'Used as the web page icon on Apple devices (iPhone, iPad, etc). Recommended size, extension: 800x800px, .png'
    }
  ]
}
