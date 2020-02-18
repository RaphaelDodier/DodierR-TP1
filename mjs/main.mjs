import {anim_element} from "./anim_element.mjs";
import { Slider } from "./Slider.mjs";
import { config_slider } from "./config_slider.mjs";
let elmTitre = document.querySelector(".titre");
const animTitre = new anim_element(elmTitre);
animTitre.anim();
const elmSlider = document.querySelector('.mon-slider')
// console.log(elmSlider.tagName)
let mon_slider = new Slider(elmSlider, config_slider)
mon_slider.creerSlider()




