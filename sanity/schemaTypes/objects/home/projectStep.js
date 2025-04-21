import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'projectStep',
  title: 'Project Step',
  type: 'object',
  fields: [
    defineField({
      name: 'step',
      title: 'Step',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Step Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Step Description',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      step: 'step',
    },
    prepare({title, step}) {
      return {
        title,
        subtitle: step,
      }
    },
  },
})
