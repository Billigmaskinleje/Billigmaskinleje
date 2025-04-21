import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'homeTestimonials',
  title: 'Testimonials Section',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    defineField({
      name: 'feedback',
      title: 'Feedback',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'reviewerName',
      title: 'Reviewer Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'designation',
      title: 'Designation',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'feedback',
      subtitle: 'feedback',
    },
    prepare({title, subtitle}) {
      return {
        title: title,
        subtitle: subtitle,
      }
    },
  },
})
