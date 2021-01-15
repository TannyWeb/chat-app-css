import '../sass/styles.sass';

console.log('is typescript working')

import { SendMessage } from './classes/sendMessage';
import { HasFormatter } from './interfaces/hasFormatter';
import { MessageTemplate } from './classes/messageTemplate';

const input = document.querySelector('input');
const btn = document.querySelector('#send');
const hour = new Date().getHours();
const mins = new Date().getMinutes();
mins < 10 ? `0${mins}` : `${mins}`;

const formattedDate = `${hour}:${mins}`;

const div = document.querySelector('#screen');
const ft = new MessageTemplate(div)


btn.addEventListener('click', (e: Event) => {
    e.preventDefault();

    console.log('it has been clicked')



    let doc: HasFormatter;

    if (input.value !== "") {
        console.log('show something')
        doc = new SendMessage('Tanny', input.value, formattedDate, 'sent')
        console.log(doc)

        ft.render(doc)
        input.value = "";
    }
})