import '../sass/styles.sass';
import { getQuote, sendMessage } from './functions/messageFunctionality';
import { gsap } from "gsap";

const GoogleImages = require('google-images');
const client = new GoogleImages('342b958892350d62b', 'AIzaSyAdHajPUMNAltSNdUh5l_Lyym8QJREtbkE');

const btn = document.querySelector('#send');
const recieveBtn = document.querySelector('#recieve') as HTMLElement;
const dateBtn = document.querySelector('#screenDate') as HTMLElement;

const fomattedDate = new Date().toDateString();
dateBtn.innerText = fomattedDate;

btn.addEventListener('click', (e: Event) => {
    e.preventDefault();
    sendMessage()
});

gsap.fromTo('#bg-design', { y: -800, duration: 1 }, { y: 0 })

recieveBtn.addEventListener('click', (e: Event) => {
    e.preventDefault();
    getQuote();
    // let tl = gsap.timeline({})
});

