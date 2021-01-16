import { Message } from '../classes/classMessage';
import { HasFormatter } from '../interfaces/hasFormatter';
import { MessageTemplate } from '../classes/messageTemplate';
import { formattedDate } from './formateDate'

const url = 'https://type.fit/api/quotes';

const input = document.querySelector('input');
const div = document.querySelector('#child');

const messageTemplate = new MessageTemplate(div);

interface QuoteInfo {
    author: string,
    text: string
}

let doc: HasFormatter;

export const getQuote = async (): Promise<Array<QuoteInfo> | string> => {

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


        // client.search(author, { size: 'large', type: 'face' }).then((images: any) => {

        //     let firstPic;
        //     images.forEach((element: { url: any; }) => {
        //         console.log(element.url)
        //     });

        //     if (images[0] === undefined) {
        //         console.log('it is undefined');
        //         firstPic = 'https://pyxis.nymag.com/v1/imgs/fdd/441/c471889a8bc88a9071586eac7b263d2313-26-tiger-king.rsquare.w330.jpg'
        //     } else {
        //         console.log('show pic')
        //         firstPic = images[0].url;
        //     }
        //     console.log(firstPic)

        //     doc = new Message(author, text, formattedDate, firstPic, 'recieved');
        //     messageTemplate.render(doc);
        // })

        doc = new Message(author, text, formattedDate, 'https://pyxis.nymag.com/v1/imgs/fdd/441/c471889a8bc88a9071586eac7b263d2313-26-tiger-king.rsquare.w330.jpg', 'recieved');
        messageTemplate.render(doc);

    } catch (error) {
        return error
    }
}

export const sendMessage = () => {
    if (input.value !== "") {
        console.log('show something')
        doc = new Message('Tanny', input.value, formattedDate, 'picyure', 'sent')
        console.log(doc)

        messageTemplate.render(doc)
        input.value = "";
    }
}