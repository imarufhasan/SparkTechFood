import { images } from '../assets/images';

export type FoodItem = {
  id: number;
  title: string;
  category: string;
  price: string;
  image: any;
  isNew?: boolean;
  typeFood?: string;
  shop?: string;
  quantity?: string;
};

export const recommendedFoods: FoodItem[] = [
  {
    id: 1,
    title: 'Butternut squash',
    category: 'Vegetables',
    price: '$5.23',
    image: images.squash,
    isNew: true,
    typeFood: 'vegetable',
    shop: 'Mackdonals',
    quantity: '1kg',
  },
  {
    id: 2,
    title: 'Fresh carrots',
    category: 'Vegetables',
    price: '$3.50',
    image: images.dairy,
    isNew: true,
    typeFood: 'vegetable',
    shop: 'Mackdonals',
    quantity: '1kg',
  },
  {
    id: 3,
    title: 'Milk',
    category: 'Dairy',
    price: '$2.00',
    image: images.dairy,
    typeFood: 'vegetable',
    shop: 'Mackdonals',
    quantity: '1kg',
  },
  {
    id: 4,
    title: 'Apple',
    category: 'Fruits',
    price: '$2.50',
    image: images.fruit,
    typeFood: 'vegetable',
    shop: 'Mackdonals',
    quantity: '1kg',
  },
  {
    id: 5,
    title: 'Cheese',
    category: 'Dairy',
    price: '$4.00',
    image: images.dairy,
    typeFood: 'vegetable',
    shop: 'Mackdonals',
    quantity: '1kg',
  },
  {
    id: 6,
    title: 'Banana',
    category: 'Fruits',
    price: '$1.50',
    image: images.fruit,
    typeFood: 'vegetable',
    shop: 'Mackdonals',
    quantity: '1kg',
  },
  {
    id: 7,
    title: 'Yogurt',
    category: 'Dairy',
    price: '$3.00',
    image: images.dairy,
    typeFood: 'vegetable',
    shop: 'Mackdonals',
    quantity: '1kg',
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
    typeFood: 'vegetable',
    shop: 'Mackdonals',
    quantity: '1kg',
  },
  {
    id: 5,
    title: 'Cheese',
    category: 'Dairy',
    price: '$4.00',
    image: images.dairy,
    typeFood: 'vegetable',
    shop: 'Mackdonals',
    quantity: '1kg',
  },
  {
    id: 6,
    title: 'Banana',
    category: 'Fruits',
    price: '$1.50',
    image: images.fruit,
    typeFood: 'vegetable',
    shop: 'Mackdonals',
    quantity: '1kg',
  },
  {
    id: 7,
    title: 'Yogurt',
    category: 'Dairy',
    price: '$3.00',
    image: images.dairy,
    typeFood: 'vegetable',
    shop: 'Mackdonals',
    quantity: '1kg',
  },
];
