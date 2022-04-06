import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import styles from './Hero.module.css'
import client from '../../client'
import SimpleBlockContent from '../SimpleBlockContent'
import Cta from '../Cta'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

function Hero(props) {
  const {heading, landingPage, backgroundImage, tagline, ctas} = props

  const style = backgroundImage
    ? {
        backgroundImage: `url("${urlFor(backgroundImage).width(2000).auto('format').url()}")`,
      }
    : {}

  const builder = imageUrlBuilder(client)
  if (!backgroundImage) {
    return null
  }

  return (
    <>
      {landingPage && (
        <div className={`${styles.root}`} style={style}>
          <div className={`min-h-screen  p-4 md:max-w-5xl mx-auto {styles.content}`}>
            <h1 className="pt-32 md:pt-64 text-4xl md:w-2/3 md:text-6xl font-bold ">{heading}</h1>
            <div className={styles.tagline}>
              {tagline && <SimpleBlockContent blocks={tagline} />}
            </div>
            {ctas && (
              <div className={styles.ctas}>
                {ctas.map((cta) => (
                  <Cta {...cta} key={cta._key} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {!landingPage && (
        <>
          <div className={`bg-gradient-to-r from-blue-900 via-sky-900 to-cyan-900 ${styles.root}`}>
            <div className={` p-4  md:max-w-3xl text-center  mx-auto {styles.content}`}>
              <h1 className=" pt-24 md:pt-32  text-4xl  md:text-6xl font-bold ">{heading}</h1>
              <div className={styles.tagline}>
                {tagline && <SimpleBlockContent blocks={tagline} />}
              </div>
              <img
                src={builder.image(backgroundImage).auto('format').width(2000).url()}
                className={`-mb-48 md:-mb-64 shadow-2xl  ${styles.backgroundImage}`}
                alt={heading}
              />
              {ctas && (
                <div className={styles.ctas}>
                  {ctas.map((cta) => (
                    <Cta {...cta} key={cta._key} />
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="bg-white h-32 md:h-48"></div>
        </>
      )}
    </>
  )
}

Hero.propTypes = {
  heading: PropTypes.string,
  landingPage: PropTypes.boolean,
  backgroundImage: PropTypes.object,
  tagline: PropTypes.array,
  ctas: PropTypes.arrayOf(PropTypes.object),
}

export default Hero
