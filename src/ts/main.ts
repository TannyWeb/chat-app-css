import '../sass/styles.sass';

console.log('is typescript working')

import { Message } from './classes/classMessage';
import { HasFormatter } from './interfaces/hasFormatter';
import { MessageTemplate } from './classes/messageTemplate';

const input = document.querySelector('input');
const btn = document.querySelector('#send');
const recieveBtn = document.querySelector('#recieve');
const hour = new Date().getHours();
let mins = new Date().getMinutes();
let newMin = '';
mins < 10 ? newMin = `0${mins}` : newMin = `${mins}`;

const formattedDate = `${hour}:${newMin}`;

const div = document.querySelector('#screen');
const messageTemplate = new MessageTemplate(div)

let doc: HasFormatter;

btn.addEventListener('click', (e: Event) => {
    e.preventDefault();


    if (input.value !== "") {
        console.log('show something')
        doc = new Message('Tanny', input.value, formattedDate, 'sent')
        console.log(doc)

        messageTemplate.render(doc)
        input.value = "";
    }
})

recieveBtn.addEventListener('click', (e: Event) => {
    e.preventDefault();
    console.log('get ready to recieve a message');
    const url = 'https://type.fit/api/quotes';
    const getQuote = async () => {

        try {
            const data = await (await fetch(url)).json();
            const randomNum = Math.floor(Math.random() * data.length);
            const randomQuote = data[randomNum];

            let { text, author } = randomQuote;

            if (author === null || author == '') {
                author = 'Unknown'
            } else {
                author = author
            }

            doc = new Message(author, text, formattedDate, 'recieved');
            messageTemplate.render(doc);

        } catch (error) {
            return error
        }
    }
    getQuote();
});

