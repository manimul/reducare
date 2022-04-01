import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import styles from './Cta.module.css'

function cta(props) {
  const {title, route, link} = props

  if (route && route.slug && route.slug.current) {
    return (
      <Link
        href={{
          pathname: '/LandingPage',
          query: {slug: route.slug.current},
        }}
        as={`/${route.slug.current}`}
      >
        <a className="bg-white text-black px-4 py-2">{title}</a>
      </Link>
    )
  }

  if (link) {
    return (
      <a className={styles.button} href={link}>
        this
        {title}
      </a>
    )
  }

  return <a className={styles.button}>this {title}</a>
}

cta.propTypes = {
  title: PropTypes.string.isRequired,
  route: PropTypes.shape({
    slug: PropTypes.shape({
      current: PropTypes.string,
    }),
  }),
  link: PropTypes.string,
}

export default cta
