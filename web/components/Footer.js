import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import {withRouter} from 'next/router'
import styles from './Footer.module.css'
import SimpleBlockContent from './SimpleBlockContent'
import {getPathFromSlug, slugParamToPath} from '../utils/urls'
import contactImage from '../images/contact-image.png'

function Footer(props) {
  const {navItems, text, router} = props
  return (
    <div className={`bg-slate-900 text-white  {styles.root} pt-0`}>
      <section className="[contact-section]  bg-[#093A61]   ">
        <div className="max-w-5xl  mx-auto flex py-32 text-white md:space-x-16 ">
          <div className="w-1/2 space-y-4">
            {' '}
            <h2 className="text-sm uppercase text-[#81A3BA]">Contact Us</h2>
            <h3 className="text-4xl text-white font-bold">
              Save at least 10% or our work. No cure - No pay
            </h3>
            <p className="">
              Of course, you get this in writing: It does not cost you a penny if we do not save you
              at least 10% compared to your current expense.
            </p>
          </div>
          <div className="[contact details section] mt-12 space-y-4 ">
            <div className="flex space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#60AAB5] h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div>
                <span className="text-[#81A3BA]  text-xs font-bold uppercase block">Telephone</span>
                <a>01 23 456 789</a>
              </div>
            </div>
            <div className="flex space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#60AAB5] h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>{' '}
              <div>
                <span className="text-[#81A3BA]  text-xs font-bold uppercase block">Email</span>
                <a className="underline" href="mailto:hello@reducare.dk">
                  hello@reducare.dk
                </a>
              </div>
            </div>
            <div className="flex space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#60AAB5] h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div>
                <span className="text-[#81A3BA] text-xs font-bold uppercase block">Address</span>
                <a>Kattegatvej 4, 2150 Copenhagen, Denmark</a>
              </div>
            </div>
          </div>
        </div>

        <div className="[contact form section] max-w-5xl mx-auto flex shadow-3xl rounded-md">
          <img src={contactImage.src} className="w-1/2 h-auto "></img>

          <form className="bg-white w-1/2 h-auto  p-8 text-black">
            <h2 className="text-2xl font-bold ">Book your meeting now</h2>
            <p className="">
              We typically save our customers 20-50% of telephony and data costs. Let's have a
              non-binding talk about how we can help you save
            </p>
            <fieldset className="flex flex-col">
              <label for="fullname" className="font-light mt-8 ">
                Full name<span className="text-red-500 dark:text-gray-50">*</span>
              </label>
              <input
                type="text"
                name="fullname"
                className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light "
              />

              <label for="email" className=" font-light mt-4 ">
                E-mail<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light "
              />

              <label for="subject" className="font-light mt-4 ">
                Subject<span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="subject"
                className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light "
              />

              <label for="message" className=" font-light mt-4 ">
                Message<span class="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500  "
              ></textarea>
              <button class="mt-8   bg-none border-2 bg-yellow-500  border-yellow-500 text-white py-5 rounded-lg inline-block tracking-wide  font-semibold uppercase">
                Send message
              </button>
            </fieldset>
          </form>
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
