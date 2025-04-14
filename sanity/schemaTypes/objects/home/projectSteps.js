import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'homeProjectSteps',
  title: 'Project Steps Section',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'steps',
      title: 'Project Steps',
      type: 'array',
      of: [
        {
          type: 'projectStep',
        },
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: 'Project Steps Section',
        subtitle: title,
      }
    },
  },
})
