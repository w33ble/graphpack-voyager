import items from './items';

export default {
  Query: {
    products: () => items,
    product(_parent, args) {
      const idx = Number.isNaN(Number(args.id)) || items[args.id] ? 0 : args.id;
      console.log({ args, idx });
      return items[idx];
    },
  },
};
