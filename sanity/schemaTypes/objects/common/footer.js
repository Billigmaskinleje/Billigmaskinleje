export default {
  name: 'footer',
  type: 'object',
  title: 'Footer',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Footer Title',
      validation: (rule) => rule.required(),
    },
    {
      name: 'menu',
      type: 'array',
      of: [{type: 'link'}],
      title: 'Footer Menu',
      validation: (rule) => rule.required(),
    },
    {
      name: 'cvr',
      type: 'string',
      title: 'CVR',
      validation: (rule) => rule.required(),
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      validation: (rule) => rule.required(),
    },
    {
      name: 'button',
      type: 'link',
      title: 'Button',
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer',
      }
    },
  },
}
