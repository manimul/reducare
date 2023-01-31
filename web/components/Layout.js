import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

import {LogoJsonLd} from 'next-seo'
import Header from './Header'
import Footer from './Footer'

function Layout(props) {
  const {config, children, language} = props

  if (!config) {
    console.error('Missing config')
    return <div>Missing config</div>
  }
  console.log('props = ')

  const {title, mainNavigation, secondaryNavigation, footerNavigation, footerText, logo, url} =
    config
  const logoUrl = logo && logo.asset && logo.asset.url

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width, viewport-fit=cover" />
      </Head>
      <div className="containerOriginal">
        <Header
          title={title}
          navItems={language == 'en' ? mainNavigation : secondaryNavigation}
          logo={logo}
        />
        <div className="-mt-24  content">{children}</div>
        <Footer
          navItems={language == 'en' ? mainNavigation : secondaryNavigation}
          text={footerText}
        />
        {logoUrl && url && <LogoJsonLd url={url} logo={logoUrl} />}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  config: PropTypes.shape({
    title: PropTypes.string,
    mainNavigation: PropTypes.arrayOf(PropTypes.object),
    footerNavigation: PropTypes.arrayOf(PropTypes.object),
    footerText: PropTypes.arrayOf(PropTypes.object),
    logo: PropTypes.shape({
      asset: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
    url: PropTypes.string,
  }),
}

export default Layout
