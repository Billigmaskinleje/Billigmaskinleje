import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'link',
  type: 'object',
  title: 'Link',
  fields: [
    defineField({
      title: 'Type',
      name: 'type',
      type: 'string',
      initialValue: 'internal',
      description: 'If there is no type selected then button hide on frontend',
      options: {
        list: [
          {title: 'Internal', value: 'internal'},
          {title: 'External', value: 'external'},
        ],
      },
    }),
    defineField({
      name: 'label',
      type: 'string',
      title: 'Label',
      validation: (rule) =>
        rule.custom((currentValue, {parent}) => {
          if (parent?.type && currentValue === undefined) return 'This is required'

          return true
        }),
      hidden: ({parent}) => !parent?.type,
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'label',
      },
      validation: (rule) =>
        rule.custom((currentValue, {parent}) => {
          if (parent?.type && parent?.type !== 'external' && currentValue === undefined)
            return 'This is required'

          return true
        }),
      hidden: ({parent}) => parent?.type === 'external',
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'URL',
      validation: (rule) =>
        rule.custom((currentValue, {parent}) => {
          if (parent?.type && parent?.type === 'external' && currentValue === undefined)
            return 'This is required'

          return true
        }),
      hidden: ({parent}) => parent?.type !== 'external',
    }),
  ],
})
