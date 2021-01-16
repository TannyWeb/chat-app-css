const GoogleImages = require('google-images');

import '../sass/styles.sass';

console.log('is typescript working')

import { Message } from './classes/classMessage';
import { HasFormatter } from './interfaces/hasFormatter';
import { MessageTemplate } from './classes/messageTemplate';

const client = new GoogleImages('342b958892350d62b', 'AIzaSyAdHajPUMNAltSNdUh5l_Lyym8QJREtbkE');


client.search('Lao Tzu').then((result: any) => {
    console.log(result)
}).catch((err: any) => {
    return err
});

const input = document.querySelector('input');
const btn = document.querySelector('#send');
const recieveBtn = document.querySelector('#recieve') as HTMLElement;
const dateBtn = document.querySelector('#screenDate') as HTMLElement;
const hour = new Date().getHours();
let mins = new Date().getMinutes();
let newMin = '';
mins < 10 ? newMin = `0${mins}` : newMin = `${mins}`;

const formattedDate = `${hour}:${newMin}`;

const div = document.querySelector('#child');
const messageTemplate = new MessageTemplate(div);
const fomattedDate = new Date().toDateString();

dateBtn.innerText = fomattedDate;



let doc: HasFormatter;

btn.addEventListener('click', (e: Event) => {
    e.preventDefault();

    if (input.value !== "") {
        console.log('show something')
        doc = new Message('Tanny', input.value, formattedDate, 'picyure', 'sent')
        console.log(doc)

        messageTemplate.render(doc)
        input.value = "";
    }
})

recieveBtn.addEventListener('click', (e: Event) => {
    e.preventDefault();
    console.log('get ready to recieve a message');
    const url = 'https://type.fit/api/quotes';

    interface E {
        author: string,
        text: string
    }
    const getQuote = async (): Promise<Array<E> | string> => {

        try {
            const data = await (await fetch(url)).json();
            const randomNum: number = Math.floor(Math.random() * data.length);
            const randomQuote = data[randomNum];

            let { text, author } = randomQuote;

            if (author === null || author == '') {
                author = 'Unknown'
            } else {
                author = author
            }


            client.search(author, { size: 'large', type: 'face' }).then((images: any) => {

                let firstPic;
                images.forEach((element: { url: any; }) => {
                    console.log(element.url)
                });

                if (images[0] === undefined) {
                    console.log('it is undefined');
                    firstPic = 'https://pyxis.nymag.com/v1/imgs/fdd/441/c471889a8bc88a9071586eac7b263d2313-26-tiger-king.rsquare.w330.jpg'
                } else {
                    console.log('show pic')
                    firstPic = images[0].url;
                }
                console.log(firstPic)

                doc = new Message(author, text, formattedDate, firstPic, 'recieved');
                messageTemplate.render(doc);
            })


        } catch (error) {
            return error
        }
    }
    getQuote();
});

