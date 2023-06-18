import * as images from '../assets';
import { SortProducts } from '../types/SortProducts';

export const months = [
  'січ',
  'лют',
  'бер',
  'квіт',
  'трав',
  'черв',
  'лип',
  'серп',
  'вер',
  'жовт',
  'лист',
  'груд',
];

interface ImageAddresses {
  [key: string]: string;
}

export const imageAddresses: ImageAddresses = {
  [SortProducts.ALL]: '',
  [SortProducts.MONITORS]: images.monitor,
  [SortProducts.KEYBOARDS]: images.keyboard,
  [SortProducts.MOUSES]: images.mouse,
  [SortProducts.SPEAKERS]: images.speaker,
  [SortProducts.PHONES]: images.phone,
  [SortProducts.TABLETS]: images.tablet,
  [SortProducts.LAPTOPS]: images.laptop,
  [SortProducts.ACCESSORIES]: images.accessories,
};

interface ProductTitles {
  [key: string]: string;
}

export const productTitles: ProductTitles = {
  [SortProducts.ALL]: '',
  [SortProducts.MONITORS]: 'Acer Predator',
  [SortProducts.KEYBOARDS]: 'Apple Magic Keyboard 2',
  [SortProducts.MOUSES]: 'Sandberg Azazinator',
  [SortProducts.SPEAKERS]: 'JBL PartyBox',
  [SortProducts.PHONES]: 'iPhone 14 Pro Max',
  [SortProducts.TABLETS]: 'Apple iPad Air 5',
  [SortProducts.LAPTOPS]: 'Apple MacBook Pro 16',
  [SortProducts.ACCESSORIES]: 'Apple accessories',
};
