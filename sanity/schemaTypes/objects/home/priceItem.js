import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'priceItem',
  title: 'Price Item',
  type: 'object',
  fields: [
    defineField({
      name: 'equipmentType',
      title: 'Equipment Type',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'model',
      title: 'Model',
      type: 'string',
    }),
    defineField({
      name: 'dailyPrice',
      title: 'Daily Price',
      type: 'string',
    }),
    defineField({
      name: 'weekendPrice',
      title: 'Weekend Price',
      type: 'string',
    }),
    defineField({
      name: 'weeklyPrice',
      title: 'Weekly Price',
      type: 'string',
    }),
    defineField({
      name: 'monthlyPrice',
      title: 'Monthly Price',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'equipmentType',
      subtitle: 'model',
    },
    prepare({title, subtitle}) {
      return {
        title,
        subtitle,
      }
    },
  },
})
