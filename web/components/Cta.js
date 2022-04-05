import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import styles from './Cta.module.css'

function cta(props) {
  const {title, route, link, style} = props

  if (route && route.slug && route.slug.current && style) {
    return (
      <Link
        href={{
          pathname: '/LandingPage',
          query: {slug: route.slug.current},
        }}
        as={`/${route.slug.current}`}
      >
        <a className="bg-none border-2 border-yellow-500 text-white px-8 py-5 rounded-lg inline-block tracking-wide  font-semibold">
          {title}
        </a>
      </Link>
    )
  }

  if (route && route.slug && route.slug.current) {
    return (
      <Link
        href={{
          pathname: '/LandingPage',
          query: {slug: route.slug.current},
        }}
        as={`/${route.slug.current}`}
      >
        <a className="bg-yellow-500 border-2 border-yellow-500  text-black px-8 py-5 rounded-lg inline-block tracking-wide  font-semibold">
          {title}
        </a>
      </Link>
    )
  }

  if (link) {
    return (
      <a className={styles.button} href={link}>
        {title}
      </a>
    )
  }

  return (
    <a className="underline" href={route.slug}>
      {title}
    </a>
  )
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
