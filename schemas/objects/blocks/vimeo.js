import React from 'react'
import Vimeo from '@u-wave/react-vimeo'

const Preview = ({value}) => {
  const {url} = value
  return (
    <>
      <Vimeo video={url} className='embed' />
      <style jsx>{`
        .embed {
          position: relative;
        }
        .embed::before {
          content: '';
          float: left;
          height: 0;
          margin-left: -1px;
          padding-top: 56.25%;
          width: -1px;
        }
        .embed::after {
          clear: both;
          content: '';
          display: table;
        }
        .embed iframe {
          bottom: 0;
          display: block;
          height: 100%;
          left: 0;
          position: absolute;
          right: 0;
          top: 0;
          width: 100%;
          border: none;
        }
      `}</style>
    </>
  )
}

export default {
  name: 'vimeoBlock',
  type: 'object',
  title: 'Vimeo Embed',
  fields: [
    {
      name: 'vimeoUrl',
      title: 'Vimeo Video URL',
      type: 'url'
    }
  ],
  preview: {
    select: {
      url: 'vimeoUrl'
    },
    component: Preview
  }
}
