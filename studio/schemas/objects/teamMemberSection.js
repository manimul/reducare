export default {
  type: 'object',
  name: 'teamMemberSection',
  title: 'Team member section',
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
      name: 'cta',
      type: 'cta',
      title: 'CTA'
    },
    {
      name: 'text',
      type: 'simplePortableText',
      title: 'Text'
    },
    {
      name: 'teamMembers',
      type: 'array',
      title: 'Team Members',
      of: [
        {
          title: 'Team Member',
          type: 'teamMember'
        }
      ]
    }
  ],
  preview: {
    select: {
      heading: 'heading'
    },
    prepare({ heading }) {
      return {
        title: `${heading}`,
        subtitle: 'Team Members Section'
      }
    }
  }
}
