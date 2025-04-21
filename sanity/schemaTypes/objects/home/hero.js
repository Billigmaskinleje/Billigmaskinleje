import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'homeHero',
  title: 'Hero Section',
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
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'figure',
      validation: (Rule) => Rule.required(),
      options: {
        collapsible: true,
        collapsed: true,
      },
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
    defineField({
      name: 'button2',
      title: 'Button 2',
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
      media: 'backgroundImage',
    },
    prepare({title, media}) {
      return {
        title: 'Hero Section',
        subtitle: title,
        media,
      }
    },
  },
})
