import React from 'react'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'

const Preview = ({value}) => {
  const {url} = value
  const id = getYouTubeId(url)
  return (
    <>
      <YouTube videoId={id} className='iframe' containerClassName='embed' />
      <style jsx>{`
        .iframe {
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
      `}</style>
    </>
  )
}

export default {
  name: 'youtubeBlock',
  type: 'object',
  title: 'YouTube Embed',
  fields: [
    {
      name: 'youtubeUrl',
      title: 'YouTube Video URL',
      type: 'url'
    }
  ],
  preview: {
    select: {
      url: 'youtubeUrl'
    },
    component: Preview
  }
}
