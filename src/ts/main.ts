import '../sass/styles.sass';
import { getQuote, sendMessage } from './functions/messageFunctionality';
import { gsap } from "gsap";

const GoogleImages = require('google-images');
const client = new GoogleImages('342b958892350d62b', 'AIzaSyAdHajPUMNAltSNdUh5l_Lyym8QJREtbkE');

const btn = document.querySelector('#send') as HTMLElement;
const recieveBtn = document.querySelector('#recieve') as HTMLElement;
const dateBtn = document.querySelector('#screenDate') as HTMLElement;

const fomattedDate: string = new Date().toDateString();
dateBtn.innerText = fomattedDate;

btn.addEventListener('click', (e: Event) => {
    e.preventDefault();
    sendMessage()
});

let tl = gsap.timeline();
tl.fromTo('#bg-design', { y: -800, duration: 1 }, { y: 0 })
    .fromTo('#phone', { visibility: "hidden" }, { visibility: "visible" })
    .fromTo('#screenDate', { display: "none" }, { display: "block" })

recieveBtn.addEventListener('click', (e: Event) => {
    e.preventDefault();
    getQuote();
    // let tl = gsap.timeline({})
});

