import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' },
  ];

  // Exactly 20 products: 4 categories × 5 products each
  // Links point to real items on kaspi.kz (product pages).
  private products: Product[] = [
    // Smartphones (categoryId: 1)
    {
      id: 101,
      categoryId: 1,
      name: 'Apple iPhone 16 128Gb (White)',
      description: 'Apple iPhone 16 with 128Gb storage. Clean iOS experience and strong performance.',
      price: 474945,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h35/h47/87295471124510.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-belyi-123726722/?c=750000000',
      commentsNumber: 860,
      commentsLink: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-belyi-123726722/?c=750000000&tab=reviews',
      likes: 0,
    },
    {
      id: 102,
      categoryId: 1,
      name: 'Apple iPhone 16 Pro Max 256Gb (Black)',
      description: 'Flagship iPhone with big screen, powerful chip and pro camera system.',
      price: 899000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000',
      commentsNumber: 1588,
      commentsLink: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000&tab=reviews',
      likes: 0,
    },
    {
      id: 103,
      categoryId: 1,
      name: 'Apple iPhone 15 256Gb (Pink)',
      description: 'iPhone 15 with 256Gb storage. Great camera, bright display, and fast charging.',
      price: 476944 ,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h34/hc3/86303335350302.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-256gb-rozovyi-113137951/?c=750000000',
      commentsNumber: 432,
      commentsLink: 'https://kaspi.kz/shop/p/apple-iphone-15-256gb-rozovyi-113137951/?c=750000000&tab=reviews',
      likes: 0,
    },
    {
      id: 104,
      categoryId: 1,
      name: 'Apple iPhone 13 128Gb (Red)',
      description: 'A reliable iPhone with excellent performance and strong camera for its class.',
      price: 354110,
      rating: 4.3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-krasnyi-102298404/?c=750000000',
      commentsNumber: 7997,
      commentsLink: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-krasnyi-102298404/?c=750000000&tab=reviews',
      likes: 0,
    },
    {
      id: 105,
      categoryId: 1,
      name: 'Apple iPhone 11 128Gb (Black)',
      description: 'Classic iPhone model with solid camera and good everyday performance.',
      price: 704000,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h74/hcd/63840620347422.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-11-128gb-nanosim-esim-chernyi-1005116/?srsltid=AfmBOoprJm3gysY_CRuBK0EG4X7iHpeDOQzzK1zHRa7BHa5Ta9Kk_brv',
      commentsNumber: 1805,
      commentsLink: 'https://kaspi.kz/shop/p/apple-iphone-11-128gb-chernyi-100511715/?c=750000000&tab=reviews',
      likes: 0,
    },

    // Laptops (categoryId: 2)
    {
      id: 201,
      categoryId: 2,
      name: 'Lenovo IdeaPad Slim 5 14IMH9 (16GB/512GB)',
      description: 'Lightweight 14" laptop for study/work. 16GB RAM and fast 512GB SSD.',
      price: 609000,
      rating: 4.3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd6/he8/85722061504542.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-slim-5-14-16-gb-ssd-512-gb-bez-os-14imh9-83da004lrk-118338855/',
      commentsNumber: 11,
      commentsLink:
        'https://kaspi.kz/shop/p/lenovo-ideapad-slim-5-14-16-gb-ssd-512-gb-bez-os-14imh9-83da004lrk-118338855/?tab=reviews',
      likes: 0,
    },
    {
      id: 202,
      categoryId: 2,
      name: 'ASUS Vivobook 15 X1504ZA (16GB/512GB)',
      description: 'Everyday 15.6" laptop with 16GB RAM and 512GB SSD for smooth multitasking.',
      price: 309900,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5d/hae/85287982989342.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/asus-vivobook-15-15-6-16-gb-ssd-512-gb-dos-x1504za-90nb1022-m01me0-117006051/',
      commentsNumber: 25,
      commentsLink:
        'https://kaspi.kz/shop/p/asus-vivobook-15-15-6-16-gb-ssd-512-gb-dos-x1504za-90nb1022-m01me0-117006051/?tab=reviews',
      likes: 0,
    },
    {
      id: 203,
      categoryId: 2,
      name: 'HP Pavilion 15 (16GB/512GB, Win 11)',
      description: 'Balanced laptop for work and study. 15.6" display, 16GB RAM, 512GB SSD.',
      price: 290000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h36/86064645963806.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/hp-pavilion-15-6-16-gb-ssd-512-gb-win-11-15-eh3056ci-a19w6ea-119606499/',
      commentsNumber: 22,
      commentsLink:
        'https://kaspi.kz/shop/p/hp-pavilion-15-6-16-gb-ssd-512-gb-win-11-15-eh3056ci-a19w6ea-119606499/?tab=reviews',
      likes: 0,
    },
    {
      id: 204,
      categoryId: 2,
      name: 'DELL Inspiron 15 3530 (16GB/512GB)',
      description: '15.6" laptop for daily tasks. 16GB RAM and 512GB SSD.',
      price: 327000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd6/h1e/85195470897182.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/dell-inspiron-15-3530-15-6-16-gb-ssd-512-gb-linux-210-bgci-116700970/',
      commentsNumber: 0,
      commentsLink:
        'https://kaspi.kz/shop/p/dell-inspiron-15-3530-15-6-16-gb-ssd-512-gb-linux-210-bgci-116700970/?tab=reviews',
      likes: 0,
    },
    {
      id: 205,
      categoryId: 2,
      name: 'Apple MacBook Air 13 (2024, M3, 8GB/256GB)',
      description: 'Thin and light MacBook Air with M3 chip. Great battery life and performance.',
      price: 697960,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pe5/p09/29101834.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2024-13-6-8-gb-ssd-256-gb-macos-mrxn3ru-a-118170954/',
      commentsNumber: 20,
      commentsLink:
        'https://kaspi.kz/shop/p/apple-macbook-air-13-2024-13-6-8-gb-ssd-256-gb-macos-mrxn3ru-a-118170954/?tab=reviews',
      likes: 0,
    },

    // Headphones (categoryId: 3)
    {
      id: 301,
      categoryId: 3,
      name: 'Sony WH-1000XM5 (Black)',
      description: 'Premium wireless over-ear headphones with active noise cancelling.',
      price: 134999,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/',
      commentsNumber: 357,
      commentsLink: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/?tab=reviews',
      likes: 0,
    },
    {
      id: 302,
      categoryId: 3,
      name: 'Apple AirPods Pro (2nd gen, MagSafe case)',
      description: 'In-ear earbuds with noise cancelling and great integration with Apple devices.',
      price: 102793,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/',
      commentsNumber: 2509,
      commentsLink:
        'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?tab=reviews',
      likes: 0,
    },
    {
      id: 303,
      categoryId: 3,
      name: 'Samsung Galaxy Buds2 Pro (White)',
      description: 'Compact true wireless earbuds with rich sound and ANC.',
      price: 230000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h69/h44/64496879435806.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/naushniki-samsung-galaxy-buds2-pro-belyi-106128764/',
      commentsNumber: 175,
      commentsLink: 'https://kaspi.kz/shop/p/naushniki-samsung-galaxy-buds2-pro-belyi-106128764/?tab=reviews',
      likes: 0,
    },
    {
      id: 304,
      categoryId: 3,
      name: 'JBL Tune 510BT (Black)',
      description: 'Affordable wireless on-ear headphones with JBL Pure Bass sound.',
      price: 11404,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hef/h29/64030233788446.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/naushniki-jbl-tune-510bt-chernyi-101420081/',
      commentsNumber: 2199,
      commentsLink: 'https://kaspi.kz/shop/p/naushniki-jbl-tune-510bt-chernyi-101420081/?tab=reviews',
      likes: 0,
    },
    {
      id: 305,
      categoryId: 3,
      name: 'Apple AirPods Max 2 (Violet)',
      description: 'High-end over-ear headphones with premium build and spatial audio.',
      price: 288807,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p38/3402331.jpeg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-max-2-fioletovyi-128589567/',
      commentsNumber: 41,
      commentsLink: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-max-2-fioletovyi-128589567/?tab=reviews',
      likes: 0,
    },

    // Tablets (categoryId: 4)
    {
      id: 401,
      categoryId: 4,
      name: 'Apple iPad 10.9 (2022, Wi‑Fi, 64GB, Silver)',
      description: '10.9" iPad for learning and creativity with all-day battery.',
      price: 219586,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5d/h3c/64865317584926.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-ipad-10-9-2022-wi-fi-10-9-djuim-4-gb-64-gb-serebristyi-107264764/',
      commentsNumber: 209,
      commentsLink:
        'https://kaspi.kz/shop/p/apple-ipad-10-9-2022-wi-fi-10-9-djuim-4-gb-64-gb-serebristyi-107264764/?tab=reviews',
      likes: 0,
    },
    {
      id: 402,
      categoryId: 4,
      name: 'Samsung Galaxy Tab S9 (11", 12GB/256GB, Graphite)',
      description: 'Powerful Android tablet with premium display and performance.',
      price: 190200,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h8b/h67/82782516477982.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-sm-x716bzaeskz-11-djuim-12-gb-256-gb-grafit-112504364/',
      commentsNumber: 30,
      commentsLink:
        'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-sm-x716bzaeskz-11-djuim-12-gb-256-gb-grafit-112504364/?tab=reviews',
      likes: 0,
    },
    {
      id: 403,
      categoryId: 4,
      name: 'Xiaomi Pad 6 (11", 8GB/256GB, Blue)',
      description: 'Fast and smooth tablet with a large screen and plenty of storage.',
      price: 174997,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h53/h7e/82746416398366.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-11-djuim-8-gb-256-gb-goluboi-112468565/',
      commentsNumber: 176,
      commentsLink:
        'https://kaspi.kz/shop/p/xiaomi-pad-6-11-djuim-8-gb-256-gb-goluboi-112468565/?tab=reviews',
      likes: 0,
    },
    {
      id: 404,
      categoryId: 4,
      name: 'Lenovo Tab M10 Plus (10.6", 4GB/128GB, Silver)',
      description: 'Great value tablet for media, reading, and everyday tasks.',
      price: 137000,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h4b/h9f/64419943645214.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/lenovo-tab-m10-plus-tb128xu-10-6-djuim-4-gb-128-gb-serebristyi-106195719/',
      commentsNumber: 10,
      commentsLink:
        'https://kaspi.kz/shop/p/lenovo-tab-m10-plus-tb128xu-10-6-djuim-4-gb-128-gb-serebristyi-106195719/?tab=reviews',
      likes: 0,
    },
    {
      id: 405,
      categoryId: 4,
      name: 'Blackview Tab 8 (10.1", 4GB/128GB, Gray)',
      description: 'Android tablet with a big screen and generous storage for the price.',
      price: 120000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hdb/h8d/84148763295774.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/blackview-tab-8-10-1-djuim-4-gb-128-gb-seryi-113731763/',
      commentsNumber: 3,
      commentsLink:
        'https://kaspi.kz/shop/p/blackview-tab-8-10-1-djuim-4-gb-128-gb-seryi-113731763/?tab=reviews',
      likes: 0,
    },
  ];

  getCategories(): Category[] {
    return [...this.categories];
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter((p) => p.categoryId === categoryId);
  }

  deleteProduct(productId: number): void {
    this.products = this.products.filter((p) => p.id !== productId);
  }
}
