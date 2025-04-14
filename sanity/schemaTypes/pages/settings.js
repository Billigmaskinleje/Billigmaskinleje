export default {
  name: 'sitesettings',
  type: 'document',
  title: 'Settings',

  fields: [
    {
      name: 'header',
      type: 'header',
      title: 'Header',
      validation: (rule) => rule.required(),
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'footer',
      type: 'footer',
      title: 'Footer',
      validation: (rule) => rule.required(),
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Setting',
      }
    },
  },
}
