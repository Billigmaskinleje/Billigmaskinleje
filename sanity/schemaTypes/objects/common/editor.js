export default {
  name: 'editor',
  type: 'array',
  title: 'Editor',
  of: [
    {
      type: 'block',

      marks: {
        annotations: [
          {
            name: 'link',
            title: 'Link',
            type: 'object',
            fields: [
              {
                name: 'href',
                title: 'Url',
                type: 'url',
              },
            ],
          },
        ],
      },
    },
  ],
}
