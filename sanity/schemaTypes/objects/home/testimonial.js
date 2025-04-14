import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'object',
  fields: [
    defineField({
      name: 'customerName',
      title: 'Customer Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'message',
      title: 'Testimonial Message',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'customerImage',
      title: 'Customer Image',
      type: 'figure',
    }),
    defineField({
      name: 'customerTitle',
      title: 'Customer Title/Role',
      type: 'string',
    }),
    defineField({
      name: 'rating',
      title: 'Rating (1-5)',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(5),
    }),
  ],
  preview: {
    select: {
      title: 'customerName',
      subtitle: 'message',
      media: 'customerImage',
    },
    prepare({title, subtitle, media}) {
      return {
        title,
        subtitle: subtitle?.substring(0, 50) + '...',
        media,
      }
    },
  },
})
