export default {
  type: 'object',
  name: 'textWithImageSection',
  title: 'Text with Image',
  fields: [
    {
      name: 'label',
      type: 'string',
      title: 'Label'
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'text',
      type: 'portableText',
      title: 'Text'
    }
  ],
  preview: {
    select: {
      heading: 'heading'
    },
    prepare({ heading }) {
      return {
        title: `${heading}`,
        subtitle: 'Text with image section'
      }
    }
  }
}
