export default {
  type: 'object',
  name: 'box',
  title: 'Box',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image'
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'boxlinks',
      type: 'cta',
      title: 'Links'
    },
    {
      name: 'body',
      type: 'simplePortableText',
      title: 'Body'
    }
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'image'
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'box item',
        media
      }
    }
  }
}
