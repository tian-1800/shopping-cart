import longan from "../../img/kelengkeng.jpg";
import durian from "../../img/durian.jpg";
import mango from "../../img/mango.jpg";
import apple from "../../img/apple.jpg";
import crystal from "../../img/crystal.jpg"; 
import arumanis from "../../img/arumanis.jpg"; 
import bawor from "../../img/bawor.jpg"; 
import fuji from "../../img/fuji.jpg"; 
import golek from "../../img/golek.jpg"; 
import malang from "../../img/malang.jpg"; 
import malibu from "../../img/malibu.jpg"; 
import manalagi from "../../img/manalagi.jpg"; 
import montong from "../../img/montong.jpg"; 
import musangking from "../../img/musang-king.jpg"; 
import pingpong from "../../img/pingpong.jpg"; 
import ruby from "../../img/ruby.jpg"; 

const items = [
  {
    category: "longan",
    description: "longan is",
    img: longan,
    variant: [
      {
        name: "crystal",
        description: "",
        img: crystal,
        specification: [],
        price: "150",
      },
      {
        name: "pingpong",
        description: "",
        img: pingpong,
        specification: [],
        price: "150",
      },
      {
        name: "ruby",
        description: "",
        img: ruby,
        specification: [],
        price: "250",
      },
    ],
  },
  {
    category: "durian",
    description: "durian is",
    img: durian,
    variant: [
      {
        name: "montong",
        description: "",
        img: montong,
        specification: [],
        price: "350",
      },
      {
        name: "musang king",
        description: "",
        img: musangking,
        specification: [],
        price: "300",
      },
      {
        name: "bawor",
        description: "",
        img: bawor,
        specification: [],
        price: "250",
      },
    ],
  },
  {
    category: "mango",
    description: "mango is",
    img: mango,
    variant: [
      {
        name: "manalagi",
        description: "",
        img: manalagi,
        specification: [],
        price: "150",
      },
      {
        name: "golek",
        description: "",
        img: golek,
        specification: [],
        price: "100",
      },
      {
        name: "arumanis",
        description: "",
        img: arumanis,
        specification: [],
        price: "125",
      },
      {
        name: "malibu",
        description: "",
        img: malibu,
        specification: [],
        price: "100",
      },
    ],
  },
  {
    category: "apple",
    description: "apple is",
    img: apple,
    variant: [
      {
        name: "malang",
        description: "",
        img: malang,
        specification: [],
        price: "200",
      },
      {
        name: "fuji",
        description: "",
        img: fuji,
        specification: [],
        price: "250",
      },
    ],
  },
];

export default items;
