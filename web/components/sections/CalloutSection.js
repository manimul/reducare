import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import styles from './ImageSection.module.css'
import client from '../../client'
import SimpleBlockContent from '../SimpleBlockContent'
import Cta from '../Cta'

const builder = imageUrlBuilder(client)

function CalloutSection(props) {
  const {heading, subheading, text, image, cta} = props

  if (!image) {
    return null
  }

  return (
    <div className={` ${styles.gradient} ${styles.root}`}>
      <section className=" mx-auto max-w-4xl flex flex-col md:flex-row py-12 md:p-6 align-middle text-center md:text-left">
        <div className=" md:w-1/3 m-auto ">
          <img
            src={builder.image(image).auto('format').width(300).url()}
            className={`h-32 md:h-64 ${styles.image}`}
            alt={heading}
          />
        </div>
        <div className=" md:w-2/3 p-6 md:p-12 flex-col  space-y-2">
          <h2 className="text-lg md:text-4xl font-bold text-white">{heading}</h2>
          <h3 className="text-lg  md:text-4xl pb-4 uppercase text-yellow-500 font-bold">
            {subheading}
          </h3>

          {text && <SimpleBlockContent blocks={text} />}
          {cta && cta.route && <Cta {...cta} />}
        </div>
      </section>
    </div>
  )
}

CalloutSection.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  text: PropTypes.array,
  image: PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string,
    }),
  }),

  cta: PropTypes.object,
}

export default CalloutSection
