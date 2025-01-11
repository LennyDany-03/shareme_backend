export default {
  name: 'photo',
  title: 'Photo',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Nature', value: 'Nature' },
          { title: 'Abstract', value: 'Abstract' },
          { title: 'Animals', value: 'Animals' },
          { title: 'Cities and Architecture', value: 'Cities' },
          { title: 'Space and Universe', value: 'Space' },
          { title: 'Minimalist', value: 'Minimalist' },
          { title: 'Art and Illustration', value: 'Art' },
          { title: 'Technology', value: 'Technology' },
          { title: 'Sports', value: 'Sports' },
          { title: 'Gaming', value: 'Gaming' },
          { title: 'Anime', value: 'Anime' },
          { title: 'Quotes and Typography', value: 'Quotes' },
        ],
        layout: 'dropdown', // Ensures it's displayed as a dropdown
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
