import { MasterDetailIcon } from '@sanity/icons'

export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  i18n: true,
  initialValue: {
    __i18n_lang: 'en'
  },
  i18n: {
    base: 'en',
    languages: ['en', 'dk'],
    fieldNames: {
      lang: '__i18n_lang',
      references: '__i18n_refs',
      baseReference: '__i18n_base'
    }
  },
  icon: MasterDetailIcon,
  fieldsets: [
    {
      title: 'SEO & metadata',
      name: 'metadata'
    }
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'content',
      type: 'array',
      title: 'Page sections',
      of: [
        { type: 'hero' },
        { type: 'imageSection' },
        { type: 'mailchimp' },
        { type: 'textSection' },
        { type: 'textWithImageSection' },
        { type: 'boxesSection' },
        { type: 'calloutSection' },
        { type: 'teamMemberSection' }
      ]
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'This description populates meta-tags on the webpage',
      fieldset: 'metadata'
    },
    {
      name: 'openGraphImage',
      type: 'image',
      title: 'Open Graph Image',
      description: 'Image for sharing previews on Facebook, Twitter etc.',
      fieldset: 'metadata'
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: 'openGraphImage'
    }
  }
}
