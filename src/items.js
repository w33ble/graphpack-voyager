const itemsWithVariants = [
  {
    id: 'SIBI-GO-GSZ160241',
    sku: 'GSZ160241',
    manufacturer: 'Goodman',
    categories: [
      {
        id: 1,
        name: 'Heat Pumps',
        isPrimary: true,
        type: 'PRODUCT',
      },
    ],
    title: 'Heat Pumps',
    description: 'Split system heat pumps, for the whole family',
    prices: { purchase: { amount: 901, currency: 'USD' } },
    images: [],
    availability: {
      isAvailable: true,
      reason: 'AVAILABLE',
    },
    measurements: [
      {
        dimension: 'width',
        value: 34.25,
        unit: 'IN',
      },
      {
        dimension: 'depth',
        value: 34.25,
        unit: 'IN',
      },
      {
        dimension: 'height',
        value: 39,
        unit: 'IN',
      },
      {
        dimension: 'tonnage',
        value: 2,
        unit: 'Ton',
      },
      {
        dimension: 'seer',
        value: 14,
        unit: 'SEER',
      },
    ],
    associatedProducts: [],
    attributes: [
      {
        displayName: 'Outsite color',
        name: 'color',
        values: [
          {
            displayName: 'Grey',
            value: 'gray',
          },
          {
            displayName: 'White',
            value: 'white',
          },
        ],
      },
    ],
    variants: [
      {
        id: 'SIBI-GO-GSZ140251',
        sku: 'GSZ140251',
        manufacturer: 'Goodman',
        categories: [
          {
            id: 1,
            name: 'Heat Pumps',
            isPrimary: true,
            type: 'PRODUCT',
          },
        ],
        title: 'Heat Pumps',
        description: 'Split system heat pumps, for the whole family',
        prices: {
          purchase: {
            amount: 920.0,
            currency: 'USD',
          },
        },
        images: [],
        availability: {
          isAvailable: false,
          reason: 'RESTRICTED',
        },
        attributes: [],
        measurements: [
          {
            dimension: 'width',
            value: 36,
            unit: 'IN',
          },
          {
            dimension: 'depth',
            value: 36,
            unit: 'IN',
          },
          {
            dimension: 'height',
            value: 39,
            unit: 'IN',
          },
          {
            dimension: 'tonnage',
            value: 3,
            unit: 'Ton',
          },
          {
            dimension: 'seer',
            value: 16,
            unit: 'SEER',
          },
        ],
        // associatedProducts: [],
      },
    ],
  },
  {
    id: 'SIBI-GE-GFW650SSNWW',
    sku: 'GFW650SSNWW',
    manufacturer: 'GE',
    categories: [
      {
        id: 2,
        name: 'Washing Machines',
        isPrimary: true,
        type: 'PRODUCT',
      },
      {
        id: 3,
        name: 'Laundry',
        isPrimary: false,
        type: 'PRODUCT',
      },
    ],
    title: '4.8 Cu. Ft. Washing Machine',
    description: 'Keep it popping with some clean clothes',
    prices: { purchase: { amount: 345.67, currency: 'USD' } },
    images: [],
    availability: {
      isAvailable: true,
      reason: 'AVAILABLE',
    },
    measurements: [
      {
        dimension: 'width',
        value: 36.75,
        unit: 'IN',
      },
      {
        dimension: 'height',
        value: 34.5,
        unit: 'IN',
      },
    ],
    associatedProducts: [],
    attributes: [],
    variants: [],
  },
];

export default itemsWithVariants;
