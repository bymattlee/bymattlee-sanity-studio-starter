export default {
  name: 'imageBlock',
  title: 'Image',
  type: 'image',
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'alternativeText',
      type: 'string',
      title: 'Alternative Text',
      description: 'Used for SEO and accessiblity.',
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption'
    }
  }
}
