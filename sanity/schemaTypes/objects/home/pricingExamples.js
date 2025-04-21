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
      name: 'dailyPrice',
      title: 'Daily Pricing',
      type: 'table',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'weeklyPrice',
      title: 'Weekly Pricing',
      type: 'table',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'monthlyPrice',
      title: 'Monthly Pricing',
      type: 'table',
      validation: (Rule) => Rule.required(),
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
