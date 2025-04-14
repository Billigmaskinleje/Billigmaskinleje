import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'homePricingExamples',
  title: 'Pricing Examples Section',
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
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'priceItems',
      title: 'Price Items',
      type: 'array',
      of: [
        {
          type: 'priceItem',
        },
      ],
    }),
    defineField({
      name: 'button',
      title: 'Button',
      type: 'link',
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
        title: 'Pricing Examples Section',
        subtitle: title,
      }
    },
  },
})
