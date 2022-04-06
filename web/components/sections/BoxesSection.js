import React from 'react'
import PropTypes from 'prop-types'
import SimpleBlockContent from '../SimpleBlockContent'
import styles from './TextSection.module.css'
import Box from '../Box'

function BoxesSection(props) {
  const {heading, label, text, cta, boxes} = props

  return (
    <div className={`bg-gray-100 ${styles.root}`}>
      <section className={'container px-4 py-12 md:max-w-5xl mx-auto'}>
        <div className="text-sm uppercase text-cyan-800 font-bol">{label}</div>
        <h2 className="text-2xl md:text-4xl font-bold">{heading}</h2>
        {text && <SimpleBlockContent blocks={text} />}
        {boxes && (
          <div className="mt-8 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 ">
            {boxes.map((box) => (
              <Box {...box} key={box._key} {...cta} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

BoxesSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.arrayOf(PropTypes.object),
  cta: PropTypes.object,
  boxes: PropTypes.arrayOf(PropTypes.object),
}

export default BoxesSection
