export default {
  type: 'object',
  name: 'teamMember',
  title: 'Team member',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'title',
      type: 'string',
      title: 'Job Title'
    },

    {
      name: 'text',
      type: 'simplePortableText',
      title: 'Text'
    },
    {
      name: 'image',
      type: 'figure',
      title: 'Image'
    },

    {
      name: 'linkedin',
      type: 'cta',
      title: 'Linkedin'
    }
  ],
  preview: {
    select: {
      heading: 'name',
      subtitle: 'title',
      media: 'image'
    },
    prepare({ heading, subtitle, media }) {
      return {
        title: `${heading}`,
        subtitle: `${subtitle}`,
        media
      }
    }
  }
}
