import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import {withRouter} from 'next/router'
import styles from './Footer.module.css'
import SimpleBlockContent from './SimpleBlockContent'
import {getPathFromSlug, slugParamToPath} from '../utils/urls'

function Footer(props) {
  const {navItems, text, router} = props
  return (
    <div className={`bg-slate-900 text-white  {styles.root} pt-0`}>
      <section className="[contact-section] bg-slate-800">
        <div className="max-w-4xl  mx-auto flex py-24 text-white md:space-x-16 ">
          <div className="w-1/2 space-y-4">
            {' '}
            <h2 className="text-sm uppercase text-white">Contact Us</h2>
            <h3 className="text-4xl text-white font-bold">
              Save at least 10% or our work. No cure - No pay
            </h3>
            <p className="">
              Of course, you get this in writing: It does not cost you a penny if we do not save you
              at least 10% compared to your current expense.
            </p>
          </div>
          <div className="[contact details section] mt-12 ">
            <div className="flex space-x-4">
              <div className="bg-white w-8 h-8"></div>
              <div>
                <span className="text-cyan-300  text-xs font-bold uppercase block">Telephone</span>
                <a>01 23 456 789</a>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="bg-white w-8 h-8"></div>
              <div>
                <span className="text-cyan-300  text-xs font-bold uppercase block">Telephone</span>
                <a>01 23 456 789</a>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="bg-white w-8 h-8"></div>
              <div>
                <span className="text-cyan-300  text-xs font-bold uppercase block">Telephone</span>
                <a>01 23 456 789</a>
              </div>
            </div>
          </div>
        </div>

        <div className="[contact form section] max-w-4xl mx-auto flex">
          <img className="bg-yellow-500 w-1/2 h-96"></img>
          <form className="bg-white w-1/2 h-96"></form>
        </div>
      </section>

      <nav className="bg-slate-900 -mt-48 pt-56">
        <ul className={`text-white ${styles.items}`}>
          {navItems &&
            navItems.map((item) => {
              const isActive = slugParamToPath(router.query.slug) === item.slug.current
              return (
                <li key={item._id} className={styles.item}>
                  <Link href={getPathFromSlug(item.slug.current)}>
                    <a data-is-active={isActive ? 'true' : 'false'} aria-current={isActive}>
                      {item.title}
                    </a>
                  </Link>
                </li>
              )
            })}
        </ul>
      </nav>
      <div className={`text-white ${styles.text}`}>
        <SimpleBlockContent blocks={text} />
      </div>
    </div>
  )
}

Footer.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  text: PropTypes.arrayOf(PropTypes.object),
  router: PropTypes.shape({
    pathname: PropTypes.string,
    query: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }),
}

export default withRouter(Footer)
