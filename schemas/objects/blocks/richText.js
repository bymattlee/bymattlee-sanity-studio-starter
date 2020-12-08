import {FiLink, FiExternalLink} from 'react-icons/fi'

export default {
  name: 'richTextBlock',
  type: 'array',
  title: 'Main Content',
  of: [
    {
      type: 'block',
      title: 'Block',
      styles: [
        {
          title: 'Normal',
          value: 'normal'
        },
        {
          title: 'H1',
          value: 'h1'
        },
        {
          title: 'H2',
          value: 'h2'
        },
        {
          title: 'H3',
          value: 'h3'
        },
        {
          title: 'H4',
          value: 'h4'
        },
        {
          title: 'Quote',
          value: 'blockquote'
        }
      ],
      lists: [
        {
          title: 'Bullet',
          value: 'bullet'
        },
        {
          title: 'Number',
          value: 'number'
        }
      ],
      marks: {
        decorators: [
          {
            title: 'Strong',
            value: 'strong'
          },
          {
            title: 'Emphasis',
            value: 'em'
          }
        ],
        annotations: [
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            blockEditor: {
              icon: FiLink
            },
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [
                  { type: 'article' },
                  { type: 'page' }
                ]
              },
              {
                title: 'Link button?',
                name: 'linkButton',
                type: 'boolean'
              }
            ]
          },
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            blockEditor: {
              icon: FiExternalLink
            },
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
                description: 'This link will open in a new tab.',
              },
              {
                title: 'Link button?',
                name: 'linkButton',
                type: 'boolean'
              }
            ]
          }
        ]
      }
    },
    {
      type: 'imageBlock',
      validation: Rule => Rule.required()
    },
    {
      type: 'youtubeBlock',
      validation: Rule => Rule.required()
    },
    {
      type: 'vimeoBlock',
      validation: Rule => Rule.required()
    }
  ]
}
