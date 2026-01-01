import { images } from '../assets/images';

export type FoodItem = {
  id: number;
  title: string;
  category: string;
  price: string;
  image: any;
  isNew?: boolean;
};

export const recommendedFoods: FoodItem[] = [
  {
    id: 1,
    title: 'Butternut squash',
    category: 'Vegetables',
    price: '$5.23',
    image: images.squash,
    isNew: true,
  },
  {
    id: 2,
    title: 'Fresh carrots',
    category: 'Vegetables',
    price: '$3.50',
    image: images.carrot,
    isNew: true,
  },
  {
    id: 3,
    title: 'Milk',
    category: 'Dairy',
    price: '$2.00',
    image: images.dairy,
  },
];

export const bestSellerFoods: FoodItem[] = [
  {
    id: 4,
    title: 'Apple',
    category: 'Fruits',
    price: '$2.50',
    image: images.fruit,
    isNew: true,
  },
  {
    id: 5,
    title: 'Cheese',
    category: 'Dairy',
    price: '$4.00',
    image: images.dairy,
  },
  {
    id: 6,
    title: 'Banana',
    category: 'Fruits',
    price: '$1.50',
    image: images.fruit,
  },
  {
    id: 7,
    title: 'Yogurt',
    category: 'Dairy',
    price: '$3.00',
    image: images.dairy,
  },
];
