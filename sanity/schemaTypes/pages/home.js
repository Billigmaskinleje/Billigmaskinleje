import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'seo',
      type: 'seo',
      title: 'Seo',
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'homeHero',
      options: {
        collapsable: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'aboutUs',
      title: 'About Us Section',
      type: 'homeAboutUs',
      options: {
        collapsable: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'equipmentCategories',
      title: 'Equipment Categories Section',
      type: 'homeEquipmentCategories',
      options: {
        collapsable: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'projectSteps',
      title: 'Project Steps Section',
      type: 'homeProjectSteps',
      options: {
        collapsable: true,
        collapsed: true,
      },
    }),

    defineField({
      name: 'pricingExamples',
      title: 'Pricing Examples Section',
      type: 'homePricingExamples',
      options: {
        collapsable: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'homeReviews',
      title: 'Home Reviews',
      type: 'homeReviews',
      options: {
        collapsable: true,
        collapsed: true,
      },
    }),

    defineField({
      name: 'faq',
      title: 'FAQ Section',
      type: 'homeFaq',
      options: {
        collapsable: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials Section',
      type: 'homeTestimonials',
      options: {
        collapsable: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'paymentMethods',
      title: 'Payment Methods',
      type: 'paymentMethods',
      options: {
        collapsable: true,
        collapsed: true,
      },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Home Page',
      }
    },
  },
})
