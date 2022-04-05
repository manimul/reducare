export default {
  type: 'object',
  name: 'boxesSection',
  title: 'Boxes with text',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'label',
      type: 'string',
      title: 'Label'
    },
    {
      name: 'text',
      type: 'simplePortableText',
      title: 'Text'
    },

    {
      name: 'cta',
      type: 'cta',
      title: 'Call to action'
    },
    {
      name: 'boxes',
      type: 'array',
      title: 'Boxes',
      of: [
        {
          title: 'Box',
          type: 'box'
        }
      ]
    }
  ],
  preview: {
    select: {
      heading: 'heading',
      subtitle: 'label'
    },
    prepare({ heading }) {
      return {
        title: `Boxese: ${heading}`,
        subtitle: 'Boxes section'
      }
    }
  }
}
