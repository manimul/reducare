import {useForm, ValidationError} from '@formspree/react'
import {withRouter} from 'next/router'
import contactImage from '../images/contact-image.png'

export default function ContactForm(locale) {
  const [state, handleSubmit] = useForm('xzbqdjdd')
  const country = locale.locale
  if (state.succeeded) {
    return (
      <div className="bg-white md:w-1/2 h-auto  p-8 text-black">
        <h2 className="text-2xl font-bold ">Thanks for your submission!</h2>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white md:w-1/2 h-auto  p-8 text-black">
      <input type="hidden" name="form-name" value="contact" />

      <h2 className="text-2xl font-bold ">
        {country === 'dk' ? 'Book dit møde nu' : 'Book your meeting now'}
      </h2>
      <p className="">
        {country === 'dk'
          ? 'Vi sparer typisk vores kunder for 20-50 % af telefoni- og dataomkostninger. Lad os tage en uforpligtende snak om, hvordan vi kan hjælpe dig med at spare.'
          : ' We typically save our customers 20-50% of telephony and data costs. Let us have a non-binding talk about how we can help you save.'}
      </p>
      <fieldset className="flex flex-col">
        <label htmlFor="fullname" className="font-light mt-8 ">
          {country === 'dk' ? 'Fulde navn' : 'Full Name'}
          <span className="text-red-500 dark:text-gray-50">*</span>
        </label>
        <input
          type="text"
          name="fullname"
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light "
        />

        <label htmlFor="email" className=" font-light mt-4 ">
          E-mail<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light "
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label htmlFor="company" className="font-light mt-4 ">
          {country === 'dk' ? 'Selskab' : 'Company'}
          <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="company"
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light "
        />

        <label htmlFor="message" className=" font-light mt-4 ">
          {country === 'dk' ? 'Besked' : 'Message'}
          <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500  "
        ></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <button
          type="submit"
          disabled={state.submitting}
          className="mt-8   bg-none border-2 bg-yellow-500  border-yellow-500  py-5 rounded-lg inline-block tracking-wide  font-semibold "
        >
          {country === 'dk' ? 'Send Besked' : 'Send Message'}
        </button>
        <ValidationError errors={state.errors} />
      </fieldset>
    </form>
  )
}
