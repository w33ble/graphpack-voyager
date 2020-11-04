const articles = [
  { title: 'Example', body: 'This is an example' },
  { title: 'Example 2', body: 'This is another example' },
];

export default {
  Query: {
    article: (_, args) => articles[args.id],
    articles: () => articles,
  },
};
