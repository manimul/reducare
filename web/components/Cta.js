import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import styles from './Cta.module.css'

function cta(props) {
  const {title, route, link, style, simpleLink} = props

  if (route && route.slug && route.slug.current && style) {
    return (
      <Link
        legacyBehavior
        href={{
          pathname: '/LandingPage',
          query: {slug: route.slug.current},
        }}
        as={`/${route.slug.current}`}
      >
        <a className="transition-all	 ease-in-out    bg-none border-2 border-yellow-500 hover:bg-[#02182A] text-white px-8 py-5 rounded-lg inline-block tracking-wide  font-semibold">
          {title}
        </a>
      </Link>
    )
  }

  if (route && route.slug && route.slug.current && !simpleLink) {
    return (
      <Link
        legacyBehavior
        href={{
          pathname: '/LandingPage',
          query: {slug: route.slug.current},
        }}
        as={`/${route.slug.current}`}
      >
        <a
          className={`transition-all	 ease-in-out   bg-yellow-500 hover:bg-yellow-400 border-2 border-yellow-500  text-black px-8 py-5 rounded-lg inline-block tracking-wide  font-semibold `}
        >
          {title}
        </a>
      </Link>
    )
  }

  if (route && route.slug && route.slug.current && simpleLink) {
    return (
      <Link
        legacyBehavior
        href={{
          pathname: '/LandingPage',
          query: {slug: route.slug.current},
        }}
        as={`/${route.slug.current}`}
      >
        <a
          className={
            'transition-all	 ease-in-out  hover:-translate-y-0.5  pt-2 text-slate-600 hover:text-black   underline rounded-lg inline-block tracking-wide  font-semibold '
          }
        >
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
    <a className="underline block" href={'/contact'}>
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
  simpleLink: PropTypes.boolean,
}

export default cta
