import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'equipmentCategory',
  title: 'Equipment Category',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Category Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Category Image',
      type: 'figure',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Category Link',
      type: 'link',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare({title, media}) {
      return {
        title,
        media,
      }
    },
  },
})
