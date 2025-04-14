export default {
  name: 'header',
  type: 'object',
  title: 'Header',
  fields: [
    {
      name: 'logo',
      type: 'figure',
      title: 'Logo',
      validation: (rule) => rule.required(),
    },
    {
      name: 'menu',
      type: 'array',
      of: [{type: 'link'}],
      title: 'Site Menu',
      validation: (rule) => rule.required(),
    },

    {
      name: 'button',
      type: 'link',
      title: 'Button 1',
      validation: (rule) => rule.required(),
    },
    {
      name: 'button2',
      type: 'link',
      title: 'Button 2',
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Header',
      }
    },
  },
}
