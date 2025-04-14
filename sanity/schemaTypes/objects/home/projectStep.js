import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'projectStep',
  title: 'Project Step',
  type: 'object',
  fields: [
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
    defineField({
      name: 'icon',
      title: 'Step Icon',
      type: 'figure',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'icon',
    },
    prepare({title, media}) {
      return {
        title,
        media,
      }
    },
  },
})
