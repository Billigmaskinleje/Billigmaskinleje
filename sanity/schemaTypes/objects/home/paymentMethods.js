import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'paymentMethods',
  title: 'Payment Methods',
  type: 'object',
  fields: [
    defineField({
      name: 'paymentOptions',
      type: 'array',
      title: 'Payment Options',
      of: [{type: 'figure'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      type: 'editor',
      title: 'Caption',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
