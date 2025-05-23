import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'homeFaq',
  title: 'FAQ Section',
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
      name: 'description',
      title: 'Description',
      type: 'editor',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'figure',
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'faqItems',
      title: 'FAQ Items',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'faq'}],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: 'FAQ Section',
        subtitle: title,
      }
    },
  },
})
