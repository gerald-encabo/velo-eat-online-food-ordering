// All images imported from images directory

// Burger
import bacon_burger_1 from "@/assets/images/bacon-burger-1.jpg";
import bacon_burger_2 from "@/assets/images/bacon-burger-2.jpg";
import bacon_burger_3 from "@/assets/images/bacon-burger-3.jpg";

import cheese_burger_1 from "@/assets/images/cheese-burger-1.jpg";
import cheese_burger_2 from "@/assets/images/cheese-burger-2.jpg";
import cheese_burger_3 from "@/assets/images/cheese-burger-3.jpg";

import chicken_burger_1 from "@/assets/images/chicken-burger-1.jpg";
import chicken_burger_2 from "@/assets/images/chicken-burger-2.jpg";
import chicken_burger_3 from "@/assets/images/chicken-burger-3.jpg";

import double_burger_1 from "@/assets/images/double-burger-1.jpg";
import double_burger_2 from "@/assets/images/double-burger-2.jpg";
import double_burger_3 from "@/assets/images/double-burger-3.jpg";

// Pizza 
import chicken_pizza_1 from "@/assets/images/chicken-pizza-1.jpg";
import chicken_pizza_2 from "@/assets/images/chicken-pizza-2.jpg";
import chicken_pizza_3 from "@/assets/images/chicken-pizza-3.jpg";

import hawaiian_pizza_1 from "@/assets/images/hawaiian-pizza-1.jpg";
import hawaiian_pizza_2 from "@/assets/images/hawaiian-pizza-2.jpg";
import hawaiian_pizza_3 from "@/assets/images/hawaiian-pizza-3.jpg";

import margherita_pizza_1 from "@/assets/images/margherita-pizza-1.jpg";
import margherita_pizza_2 from "@/assets/images/margherita-pizza-2.jpg";
import margherita_pizza_3 from "@/assets/images/margherita-pizza-3.jpg";

import pepperoni_pizza_1 from "@/assets/images/pepperoni-pizza-1.jpg";
import pepperoni_pizza_2 from "@/assets/images/pepperoni-pizza-2.jpg";
import pepperoni_pizza_3 from "@/assets/images/pepperoni-pizza-3.jpg";

// Sushi
import maki_sushi_1 from "@/assets/images/maki-sushi-1.jpg";
import maki_sushi_2 from "@/assets/images/maki-sushi-2.jpg";
import maki_sushi_3 from "@/assets/images/maki-sushi-3.jpg";

import nigiri_sushi_1 from "@/assets/images/nigiri-sushi-1.jpg";
import nigiri_sushi_2 from "@/assets/images/nigiri-sushi-2.jpg";
import nigiri_sushi_3 from "@/assets/images/nigiri-sushi-3.jpg";

import shashimi_sushi_1 from "@/assets/images/sashimi-sushi-1.jpg";
import shashimi_sushi_2 from "@/assets/images/sashimi-sushi-2.jpg";
import shashimi_sushi_3 from "@/assets/images/sashimi-sushi-3.jpg";

import uramaki_sushi_1 from "@/assets/images/uramaki-sushi-1.jpg";
import uramaki_sushi_2 from "@/assets/images/uramaki-sushi-2.jpg";
import uramaki_sushi_3 from "@/assets/images/uramaki-sushi-3.jpg";

// Taco
import taco_al_pastor_1 from "@/assets/images/taco-al-pastor-2.jpg";
import taco_al_pastor_2 from "@/assets/images/taco-al-pastor-3.jpg";
import taco_al_pastor_3 from "@/assets/images/taco-al-pastor-1.jpg";

import taco_de_birria_1 from "@/assets/images/taco-de-birria-2.png";
import taco_de_birria_2 from "@/assets/images/taco-de-birria-3.png";
import taco_de_birria_3 from "@/assets/images/taco-de-birria-1.png";

import taco_de_cabeza_1 from "@/assets/images/taco-de-cabeza-1.png";
import taco_de_cabeza_2 from "@/assets/images/taco-de-cabeza-2.png";
import taco_de_cabeza_3 from "@/assets/images/taco-de-cabeza-3.png";

import taco_de_carne_asada_1 from "@/assets/images/taco-de-carne-asada-3.png";
import taco_de_carne_asada_2 from "@/assets/images/taco-de-carne-asada-2.png";
import taco_de_carne_asada_3 from "@/assets/images/taco-de-carne-asada-1.png";

import { ProductDataType } from "@/types/ListTypes";

const products: Array<ProductDataType> = [
  {
    id: 1,
    title: "Bacon Burger",
    price: 15.99,
    img: bacon_burger_1,
    img2: bacon_burger_2,
    img3: bacon_burger_3,
    category: "Burger",
    popular: "yes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
  },

  {
    id: 2,
    title: "Cheese Burger",
    price: 16.99,
    img: cheese_burger_1,
    img2: cheese_burger_2,
    img3: cheese_burger_3,
    category: "Burger",
    popular: "yes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
  },

  {
    id: 3,
    title: "Chicken Burger",
    price: 17.50,
    img: chicken_burger_1,
    img2: chicken_burger_2,
    img3: chicken_burger_3,
    category: "Burger",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: 4,
    title: "Double Burger",
    price: 20.00,
    img: double_burger_1,
    img2: double_burger_2,
    img3: double_burger_3,
    category: "Burger",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: 5,
    title: "Chicken Pizza",
    price: 18.95,
    img: chicken_pizza_1,
    img2: chicken_pizza_2,
    img3: chicken_pizza_3,
    category: "Pizza",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: 6,
    title: "Hawaiian Pizza",
    price: 17.75,
    img: hawaiian_pizza_1,
    img2: hawaiian_pizza_2,
    img3: hawaiian_pizza_3,
    category: "Pizza",
    popular: "yes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: 7,
    title: "Margherita Pizza",
    price: 15.0,
    img: margherita_pizza_1,
    img2: margherita_pizza_2,
    img3: margherita_pizza_3,
    category: "Pizza",
    popular: "yes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: 8,
    title: "Pepperoni Pizza",
    price: 16.50,
    img: pepperoni_pizza_1,
    img2: pepperoni_pizza_2,
    img3: pepperoni_pizza_3,
    category: "Pizza",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: 9,
    title: "Maki Sushi",
    price: 17.00,
    img: maki_sushi_1,
    img2: maki_sushi_2,
    img3: maki_sushi_3,
    category: "Sushi",
    popular: "yes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: 10,
    title: "Nigiri Sushi",
    price: 19.50,
    img: nigiri_sushi_1,
    img2: nigiri_sushi_2,
    img3: nigiri_sushi_3,
    category: "Sushi",
    popular: "yes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: 11,
    title: "Shashimi Sushi",
    price: 21.50,
    img: shashimi_sushi_1,
    img2: shashimi_sushi_2,
    img3: shashimi_sushi_3,
    category: "Sushi",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: 12,
    title: "Uramaki Sushi",
    price: 20.00,
    img: uramaki_sushi_1,
    img2: uramaki_sushi_2,
    img3: uramaki_sushi_3,
    category: "Sushi",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: 13,
    title: "Al Pasto Taco",
    price: 18.00,
    img: taco_al_pastor_1,
    img2: taco_al_pastor_2,
    img3:  taco_al_pastor_3,
    category: "Taco",
    popular: "yes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: 14,
    title: "De Birria Taco",
    price: 18.50,
    img: taco_de_birria_1,
    img2: taco_de_birria_2,
    img3:  taco_de_birria_3,
    category: "Taco",
    popular: "yes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: 15,
    title: "De Cabeza Taco",
    price: 17.50,
    img: taco_de_cabeza_1,
    img2: taco_de_cabeza_2,
    img3: taco_de_cabeza_3,
    category: "Taco",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: 16,
    title: "De Carne Asada Taco",
    price: 19.00,
    img: taco_de_carne_asada_1,
    img2: taco_de_carne_asada_2,
    img3: taco_de_carne_asada_3,
    category: "Taco",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
];

export default products;