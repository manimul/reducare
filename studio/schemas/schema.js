// Document types
import page from './documents/page'
import route from './documents/route'
import siteConfig from './documents/siteConfig'

// Object types
import cta from './objects/cta'
import box from './objects/box'
import embedHTML from './objects/embedHTML'
import figure from './objects/figure'
import internalLink from './objects/internalLink'
import link from './objects/link'
import portableText from './objects/portableText'
import simplePortableText from './objects/simplePortableText'

// Landing page sections
import hero from './objects/hero'
import imageSection from './objects/imageSection'
import mailchimp from './objects/mailchimp'
import textSection from './objects/textSection'
import textWithImageSection from './objects/textWithImageSection'
import boxesSection from './objects/boxesSection'
import calloutSection from './objects/calloutSection'
import teamMember from './objects/teamMember'
import teamMemberSection from './objects/teamMemberSection'

// Then we give our schema to the builder and provide the result to Sanity
export default [
  cta,
  box,
  embedHTML,
  figure,
  hero,
  imageSection,
  internalLink,
  link,
  mailchimp,
  page,
  portableText,
  route,
  simplePortableText,
  siteConfig,
  textSection,
  boxesSection,
  textWithImageSection,
  calloutSection,
  teamMember,
  teamMemberSection
]
