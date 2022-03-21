import { v4 as uuid } from "uuid";
// import {
//   product1,product2,
//   product3,product4,
//   product5,product6,
//   product8,product7,
//   product9,product12,
//    product10,product13,
//     product11,product14,product15
// } from "./../../assets/images/Products/Products";



import product1 from   "./../../../src/assets/images/Products/product1.jpg";
import product2 from   "./../../../src/assets/images/Products/product2.jpg";
import product3 from   "./../../../src/assets/images/Products/product3.jpg";
import product4 from   "./../../../src/assets/images/Products/product4.jpg";
import product5 from   "./../../../src/assets/images/Products/product5.jpg";
import product6 from   "./../../../src/assets/images/Products/product6.jpg";
import product7 from   "./../../../src/assets/images/Products/product7.jpg";
import product8 from   "./../../../src/assets/images/Products/product8.jpg";
import product9 from   "./../../../src/assets/images/Products/product9.jpg";
import product10 from  "./../../../src/assets/images/Products/product10.jpg";
import product11 from  "./../../../src/assets/images/Products/product11.jpg";
import product12 from  "./../../../src/assets/images/Products/product12.jpg";
import product13 from  "./../../../src/assets/images/Products/product13.jpg";
import product14 from  "./../../../src/assets/images/Products/product14.jpg";
import product15 from  "./../../../src/assets/images/Products/product15.jpg";
import product16_slides  from  "./../../../src/assets/images/Products/product16_slides.webp";
import product17_sportshoe  from  "./../../../src/assets/images/Products/product17_sportshoe.webp";
import product18_sportshoe  from  "./../../../src/assets/images/Products/product18_sportsshoe.webp";
import product19_sportshoe  from  "./../../../src/assets/images/Products/product19_sportshoe.webp";
import product20_sportshoe  from  "./../../../src/assets/images/Products/product20_sportshoe.webp";
import product21_sportshoe  from  "./../../../src/assets/images/Products/product21_sportshoe.webp";
import product22_sportShoe  from  "./../../../src/assets/images/Products/product22_sportShoe.webp";
import product23_sportshoe  from  "./../../../src/assets/images/Products/product23_sportshoe.webp";
import product24_sportshoe  from  "./../../../src/assets/images/Products/product24_sportshoe.webp";
import product25_sportshoe  from  "./../../../src/assets/images/Products/product25_sportshoe.webp";
import product26_sportshoe  from  "./../../../src/assets/images/Products/product26_sportsho.webp";
import product27_slides  from  "./../../../src/assets/images/Products/product27_slides.webp";
import product28_slides  from  "./../../../src/assets/images/Products/product28_slides.webp";
import product29_slides  from  "./../../../src/assets/images/Products/product29_slides.webp";
import product30_slides  from  "./../../../src/assets/images/Products/product30_slides.webp";
import product31_slides  from  "./../../../src/assets/images/Products/product31_slides.webp";
import product32_slides  from  "./../../../src/assets/images/Products/product32_slides.webp";




// var prodct = require("./../../../public/img/arrival-banner-1.jpg");
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */
//  categoryType:"Football Cricket Gym Running Regular",
//     stock : true,
//     stockType : "Newest TopSeller",
//     feature : "waterResistant NoLace GhostLace Lace",
//     productType : "slides shoes"
export const products = [
  {
    _id: uuid(),
    title: "Max 95 SE",
    author: "Nike Sneaker",
    price: "12000",
    url:product1,
    discount:"-10% off",
    discountedPrice:10900,
    description:"Sneaker of Nike",
    categoryName: "Sports",
    categoryType:"Gym",
    stock : true,
    stockType : "TopSeller",
    feature : "waterResistant",
    productType : "shoes"
  },
  {
    _id: uuid(),
    title: "Max 2021 SE",
    price: "2500",
    url:product2,
    discount:"-20% off",
    discountedPrice:2000,
    description:"White Sneaker take care",
    categoryName: "White Sneaker",
    categoryType:"Regular",
    stock : true,
    stockType : "Newest",
    feature : "waterResistant",
    productType : "shoes"
  },
  {
    _id: uuid(),
    title: "Men Premium Shoe",
    author: "Sneaker",
    price: "2900",
    categoryName: "Black Nikes",
    url:product3,
    discount:"-10% off",
    discountedPrice:2600,
    description:"Balck nikes for running",
    categoryType:"Running",
    stock : true,
    stockType : "TopSeller",
    feature : "Lace",
    productType : "shoes"
  },
  {
    _id: uuid(),
    title: "Tasor High",
    author: "Sneaker",
    price: "9000",
    categoryName: "Leather Boots",
    url:product4,
    discount:"-30% off",
    discountedPrice:6000,
    description:"",
    categoryType:"Regular",
    stock : true,
    stockType : "TopSeller",
    feature : "Lace",
    productType : "shoes"
  },
  {
    _id: uuid(),
    title: "Vapor Max",
    author: "Sneaker",
    price: "2000",
    categoryName: "Vans",
    url:product5,
    discount:"-30% off",
    discountedPrice:1500,
    description:"Gray Vans Classic",
    categoryType:"Regular",
    stock : true,
    stockType : "TopSeller",
    feature : "Lace",
    productType : "shoes"
  },
  {
    _id: uuid(),
    title: "Max 97",
    author: "Sneaker",
    price: "5500",
    categoryName: "Yellow-sneakers",
    url:product6,
    discount:"-18% off",
    discountedPrice:3600,
    description:"",
    categoryType:"Regular",
    stock : false,
    stockType : "Newest",
    feature : "GhostLace",
    productType : "shoes"
  },
  {
    _id: uuid(),
    title: "Alpha Trainer",
    author: "Sneaker",
    price: "8000",
    categoryName: "Nike Sneakers",
    url:product7,
    discount:"-25% off",
    discountedPrice:6000,
    description:"Nike Sneakers",
    categoryType:"Gym",
    stock : true,
    stockType : "Newest",
    feature : "Lace",
    productType : "shoes"
  },
  {
    _id: uuid(),
    title: "INTRLX",
    author: "Sneaker",
    price: "2000",
    categoryName: "Normal Shoe",
    url:product8,
    discount:"-30% off",
    discountedPrice:1400,
    description:"",
    categoryType:"Regular",
    stock : true,
    stockType : "TopSeller",
    feature : "waterResistant",
    productType : "shoes"
  },
  {
    _id: uuid(),
    title: "AIR",
    author: "Sneaker",
    price: "6000",
    categoryName: "Nike Sneakers",
    url:product9,
    discount:"-10% off",
    discountedPrice:5400,
    description:"Nike Sneakers",
    categoryType:"Regular",
    stock : true,
    stockType : "Newest",
    feature : "Lace",
    productType : "shoes"
  },
  {
    _id: uuid(),
    title: "Old Daddy boots",
    author: "Sneaker",
    price: "5000",
    categoryName: "non-fiction",
    url:product10,
    discount:"-30% off",
    discountedPrice:3000,
    description:"",
    categoryType:"Regular",
    stock : true,
    stockType : "TopSeller",
    feature : "NoLace",
    productType : "shoes"
  },
  {
    _id: uuid(),
    title: "Shaders Nike",
    author: "Sneaker",
    price: "6000",
    categoryName: "Nike Sneakers",
    url:product11,
    discount:"-10% off",
    discountedPrice:5400,
    description:"Nike Sneakers",
    categoryType:"Regular",
    stock : true,
    stockType : "Newest",
    feature : "waterResistant",
    productType : "shoes"
  },
  {
    _id: uuid(),
    title: "NoBlack Trans",
    author: "Sneaker",
    price: "5000",
    categoryName: "White Sneakers",
    url:product12,
    discount:"-10% off",
    discountedPrice:4500,
    description:"White Sneakers",
    categoryType:"Regular",
    stock : true,
    stockType : "TopSeller",
    feature : "GhostLace",
    productType : "shoes"
  },
  {
    _id: uuid(),
    title: "BullHorns",
    author: "Sneaker",
    price: "4000",
    categoryName: "Lace Boots",
    url:product13,
    discount:"-50% off",
    discountedPrice:2000,
    description:"Lace Boots",
    categoryType:"Regular",
    stock : true,
    stockType : "TopSeller",
    feature : "Lace",
    productType : "shoes"
  },
  {
    _id: uuid(),
    title: "CrocBites",
    author: "Sneaker",
    price: "2000",
    categoryName: "non-fiction",
    url:product14,
    discount:"-5% off",
    discountedPrice:1900,
    description:"",
    categoryType:"Regular",
    stock : true,
    stockType : "Newest",
    feature : "Lace",
    productType : "shoes"
  },
  {
    _id: uuid(),
    title: "Grasshopper Cut",
    author: "Sneaker",
    price: "6000",
    categoryName: "Boots",
    url:product15,
    discount:"-10% off",
    discountedPrice:5400,
    description:"Boots",
    categoryType:"Regular",
    stock : false,
    stockType : "TopSeller",
    feature : "Lace",
    productType : "shoes"
  },

  {
    _id: uuid(),
    title: "Floaters",
    author: "Sneaker",
    price: "100",
    categoryName: "Slides Slippers",
    url:product16_slides,
    discount:"-10% off",
    discountedPrice:900,
    description:"Slides Slippers",
    categoryType:"Regular",
    stock : true,
    stockType : "Newest",
    feature : "waterResistant",
    productType : "slides"
  },
    {
    _id: uuid(),
    title: "Premier",
    author: "Sneaker",
    price: "6000",
    categoryName: "Black Sneakers",
    url:product17_sportshoe,
    discount:"-20% off",
    discountedPrice:4800,
    description:"Black Sneakers",
    categoryType:"Gym",
    stock : true,
    stockType : "Newest",
    feature : "GhostLace",
    productType : "shoes"
  },
  {
    _id: uuid(),
    title: "Copa 23",
    author: "Sneaker",
    price: "6000",
    categoryName: "Football shoes",
    url:product18_sportshoe,
    discount:"-10% off",
    discountedPrice:4400,
    description:"",
    categoryType:"Football",
    stock : true,
    stockType : "Newest",
    feature : "GhostLace",
    productType : "shoes"
  },

    {
    _id: uuid(),
    title: "Nemiziz 4",
    author: "Sneaker",
    price: "3000",
    categoryName: "Football shoes",
    url:product19_sportshoe,
    discount:"-30% off",
    discountedPrice:2100,
    description:"Football shoes",
    categoryType:"Football",
    stock : false,
    stockType : "TopSeller",
    feature : "NoLace",
    productType : "shoes"
  },

    {
    _id: uuid(),
    title: "Predator Edge",
    author: "Sneaker",
    price: "10000",
    categoryName: "Football shoes",
    url:product20_sportshoe,
    discount:"-10% off",
    discountedPrice:9000,
    description:"Football shoes",
    categoryType:"Football",
    stock : true,
    stockType : "Newest",
    feature : "GhostLace",
    productType : "shoes"
  },
    {
    _id: uuid(),
    title: "Predator Edge 2.0",
    author: "Sneaker",
    price: "8000",
    categoryName: "Football shoes",
    url:product21_sportshoe,
    discount:"-50% off",
    discountedPrice:7540,
    description:"Football shoes",
    categoryType:"Football",
    stock : false,
    stockType : "TopSeller",
    feature : "GhostLace",
    productType : "shoes"
  },
  {
    _id: uuid(),
    title: "X-speedflow-1",
    author: "Sneaker",
    price: "5000",
    categoryName: "Football shoes",
    url:product22_sportShoe,
    discount:"-30% off",
    discountedPrice:3000,
    description:"Football shoes",
    categoryType:"Football",
    stock : false,
    stockType : "Newest",
    feature : "NoLace",
    productType : "shoes"
  },
  {
    _id: uuid(),
    title: "X-speedflow-4",
    author: "Sneaker",
    price: "7000",
    categoryName: "Football shoes",
    url:product23_sportshoe,
    discount:"-20% off",
    discountedPrice:5400,
    description:"Football shoes",
    categoryType:"Football",
    stock : true,
    stockType : "Newest",
    feature : "GhostLace",
    productType : "shoes"
  },
  {
    _id: uuid(),
    title: "X-speedflow-3",
    author: "Sneaker",
    price: "6000",
    categoryName: "Football shoes",
    url:product24_sportshoe,
    discount:"-2% off",
    discountedPrice:5860,
    description:"Football shoes",
    categoryType:"Football",
    stock : false,
    stockType : "Newest",
    feature : "GhostLace",
    productType : "shoes"
  },
  {
    _id: uuid(),
    title: "Adipower",
    author: "Sneaker",
    price: "6000",
    categoryName: "Cricket Shoe",
    url:product25_sportshoe,
    discount:"-20% off",
    discountedPrice:5400,
    description:"Cricket Shoe",
    categoryType:"Cricket",
    stock : true,
    stockType : "Newest",
    feature : "waterResistant",
    productType : "shoes"
  },
  {
    _id: uuid(),
    title: "CriCup 2022",
    author: "Sneaker",
    price: "12000",
    categoryName: "Cricket Shoe",
    url:product26_sportshoe,
    discount:"-30% off",
    discountedPrice:9000,
    description:"Cricket Shoe",
    categoryType:"Cricket",
    stock : true,
    stockType : "TopSeller",
    feature : "Lace",
    productType : "shoes"
  },
  {
    _id: uuid(),
    title: "Cloud slides",
    author: "Sneaker",
    price: "1200",
    categoryName: "slides / slippers",
    url:product27_slides,
    discount:"-10% off",
    discountedPrice:1000,
    description:"slides / slippers",
    categoryType:"Regular",
    stock : true,
    stockType : "Newest",
    feature : "waterResistant",
    productType : "slides"
  },
  {
    _id: uuid(),
    title: "Aqua Flip/Flops",
    author: "Sneaker",
    price: "1500",
    categoryName: "slides / slippers",
    url:product28_slides,
    discount:"-20% off",
    discountedPrice:900,
    description:"slides / slippers",
    categoryType:"Regular",
    stock : true,
    stockType : "TopSeller",
    feature : "waterResistant",
    productType : "slides"
  },
  {
    _id: uuid(),
    title: "Ezazy Flip/Flops",
    author: "Sneaker",
    price: "500",
    categoryName: "slides / slippers",
    url:product29_slides,
    discount:"-5% off",
    discountedPrice:450,
    description:"slides / slippers",
    categoryType:"Regular",
    stock : false,
    stockType : "TopSeller",
    feature : "waterResistant",
    productType : "slides"
  },
  {
    _id: uuid(),
    title: "Adilete Flip/Flops",
    author: "Sneaker",
    price: "900",
    categoryName: "slides / slippers",
    url:product30_slides,
    discount:"-7% off",
    discountedPrice:800,
    description:"slides / slippers",
    categoryType:"Gym",
    stock : false,
    stockType : "Newest",
    feature : "waterResistant",
    productType : "slides"
  },
  {
    _id: uuid(),
    title: "IND Custom Flip/Flops",
    author: "Sneaker",
    price: "900",
    categoryName: "slides / slippers",
    url:product31_slides,
    discount:"-10% off",
    discountedPrice:800,
    description:"slides / slippers",
    categoryType:"Regular",
    stock : true,
    stockType : "Newest",
    feature : "waterResistant",
    productType : "slides"
  },
  {
    _id: uuid(),
    title: "Comfort Flip/Flops",
    author: "Sneaker",
    price: "1000",
    categoryName: "slides / slippers",
    url:product32_slides,
    discount:"-8% off",
    discountedPrice:920,
    description:"slides / slippers",
    categoryType:"Gym",
    stock : true,
    stockType : "TopSeller",
    feature : "waterResistant",
    productType : "slides"
  },
];
