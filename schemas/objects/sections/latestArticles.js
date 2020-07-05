export default {
  name: 'latestArticlesSection',
  title: 'Latest Articles',
  type: 'object',
  fields: [
    {
      name: 'disabled',
      title: 'Disable Section?',
      type: 'boolean'
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Used as the main heading of this section.'
    }
  ],
  preview: {
    select: {
      title: 'heading',
      disabled: 'disabled'
    },
    prepare ({title, disabled}) {
      return {
        title: `${disabled ? 'DISABLED: ' : ''}${title || 'Latest Articles'}`
      }
    }
  }
}
