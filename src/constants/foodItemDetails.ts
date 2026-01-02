import { images } from '../assets/images';

export const foodDetails = {
  id: 1,
  title: 'Fresh carrots',
  image: images.dairy, // local image
  unit: 'kg',
  defaultQty: 1,
  price: {
    amount: 10.55,
    currency: '$',
  },
  description:
    'Lorem ipsum dolor sit amet consectetur. Et egestas viverra consectetur ultrices cras in porttitor odio turpis commodo libero. Leo ut turpis morbi vulputate elit quam id lectus eget etiam commodo quis ultrices.',
  store: {
    name: 'Starbucks',
    logo: 'https://i.imgur.com/1bX5QH6.png',
  },
  highlights: [
    {
      id: 1,
      label: '100% \nOrganic',
      icon: 'leaf-outline',
    },
    {
      id: 2,
      label: '7 days \nExpiration',
      icon: 'time-outline',
    },
  ],
  similarItems: [
    {
      id: 101,
      title: 'Fresh Lettuce',
      image: 'https://i.imgur.com/YR8FQxO.png',
      price: 5.23,
      badge: 'Popular',
    },
    {
      id: 102,
      title: 'Red paper',
      image: 'https://i.imgur.com/2nCt3S5.png',
      price: 5.23,
      badge: 'New',
    },
  ],
};
