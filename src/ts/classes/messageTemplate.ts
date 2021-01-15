import { HasFormatter } from '../interfaces/hasFormatter';

export class MessageTemplate {
    constructor(private container: Element) {

    }

    render(item: HasFormatter) {
        const div = document.createElement('div')
        div.classList.add('text-xs', 'p-2', 'rounded-t-xl', 'rounded-br-xl', 'rounded-bl-md', 'w-3/5', 'mb-4');
        console.log(item.type())
        if (item.type() == 'sent') {
            div.classList.add('bg-white', 'text-gray-600', 'shadow-lg', 'self-end')
        } else if (item.type() == 'recieved') {
            div.classList.add('bg-gray-200', 'text-purple-500', 'self-start')
        }
        const h4 = document.createElement('h4');
        h4.innerText = item.name();
        div.append(h4)

        const p = document.createElement('p');
        p.innerText = item.message();
        div.append(p)

        const d = document.createElement('p');
        d.innerText = item.date()
        div.append(d)


        this.container.append(div)
    }
}