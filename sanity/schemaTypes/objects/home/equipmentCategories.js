import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'homeEquipmentCategories',
  title: 'Equipment Categories Section',
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
      name: 'categories',
      title: 'Equipment Categories',
      type: 'array',
      of: [
        {
          type: 'equipmentCategory',
        },
      ],
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
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: 'Equipment Categories Section',
        subtitle: title,
      }
    },
  },
})
