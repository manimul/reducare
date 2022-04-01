import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import styles from './ImageSection.module.css'
import client from '../../client'
import SimpleBlockContent from '../SimpleBlockContent'
import Cta from '../Cta'

const builder = imageUrlBuilder(client)

function ImageSection(props) {
  const {heading, label, text, image, cta} = props

  if (!image) {
    return null
  }

  return (
    <div className={styles.root}>
      {/*comment here
      
      <figure className={styles.content}>
        <img
          src={builder.image(image).auto('format').width(2000).url()}
          className={styles.image}
          alt={heading}
        />
        <figcaption>
          <div className={styles.caption}>
            <div className={styles.captionBox}>
              <div className={styles.label}>{label}</div>
              <h2 className={styles.title}>{heading}</h2>
              {text && <SimpleBlockContent blocks={text} />}
              {cta && cta.route && <Cta {...cta} />}
            </div>
          </div>
        </figcaption>
      </figure>
*/}
      <section className=" container mx-auto flex flex-row">
        <div className="w-1/2 ">
          <img
            src={builder.image(image).auto('format').width(2000).url()}
            className={`${styles.image}`}
            alt={heading}
          />
        </div>
        <div className="w-1/2 p-12 flex-col  space-y-2">
          <div className="text-sm uppercase text-cyan-800 font-bol">{label}</div>
          <h2 className="text-4xl font-bold">{heading}</h2>
          {text && <SimpleBlockContent blocks={text} />}
          {cta && cta.route && <Cta {...cta} />}
        </div>
      </section>
    </div>
  )
}

ImageSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.array,
  image: PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string,
    }),
  }),
  backgroundImage: PropTypes.string,
  tagline: PropTypes.string,
  cta: PropTypes.object,
}

export default ImageSection
