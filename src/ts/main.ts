const GoogleImages = require('google-images');

import '../sass/styles.sass';

console.log('is typescript working')

import { getQuote, sendMessage } from './functions/messageFunctionality'

const client = new GoogleImages('342b958892350d62b', 'AIzaSyAdHajPUMNAltSNdUh5l_Lyym8QJREtbkE');


const btn = document.querySelector('#send');
const recieveBtn = document.querySelector('#recieve') as HTMLElement;
const dateBtn = document.querySelector('#screenDate') as HTMLElement;



const fomattedDate = new Date().toDateString();
dateBtn.innerText = fomattedDate;

btn.addEventListener('click', (e: Event) => {
    e.preventDefault();
    sendMessage()
})

recieveBtn.addEventListener('click', (e: Event) => {
    e.preventDefault();
    getQuote();
});

