import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import client from './../client'
import SimpleBlockContent from './SimpleBlockContent'
import Cta from './Cta'

function teamMember(props) {
  const {name, title, text, image, linkedin} = props
  const builder = imageUrlBuilder(client)

  return (
    <div className="max-w-4xl flex md:flex-row flex-col space-y-6 md:even:flex-row-reverse md:space-x-8 ">
      <img
        src={builder.image(image).auto('format').width(1000).url()}
        className="md:w-1/2 h-80  md:h-auto md:mx-6 shadow-2xl rounded-md"
        alt={name}
      />
      <div className="space-y-2 grow ">
        <h2 className="font-bold text-xl">{name}</h2>
        <h3 className="font-bold text-xl">{title}</h3>
        {text && <SimpleBlockContent className="mb-4" blocks={text} />}
        {linkedin && <Cta {...linkedin} />}
      </div>
    </div>
  )
}

teamMember.propTypes = {
  image: PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string,
    }),
  }),
  name: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.arrayOf(PropTypes.object),
  linkedin: PropTypes.object,
}

export default teamMember
