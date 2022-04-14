import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import client from './../client'
import SimpleBlockContent from './SimpleBlockContent'
import Cta from './Cta'

function box(props) {
  const {image, heading, body, boxlinks} = props
  const builder = imageUrlBuilder(client)
  const simpleLink = true
  simpleLink

  return (
    <div className="bg-white p-6 border border-gray-300 rounded grow basis-0 shadow-xl space-y-2">
      <img src={builder.image(image).auto('format').width(2000).url()} className="" alt={heading} />
      <h1 className="font-bold text-xl">{heading}</h1>
      {body && <SimpleBlockContent className="mb-4" blocks={body} />}
      {boxlinks && <Cta simpleLink {...boxlinks} />}
    </div>
  )
}

box.propTypes = {
  image: PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string,
    }),
  }),
  heading: PropTypes.string,
  style: PropTypes.string,

  body: PropTypes.arrayOf(PropTypes.object),
  boxlinks: PropTypes.object,
}

export default box
