import { HasFormatter } from '../interfaces/hasFormatter';
import { colors, shades } from '../functions/randomPickGenerator'

export class MessageTemplate {
    constructor(private container: Element) { }
    render(item: HasFormatter) {

        //Create outer div
        const outerDiv = document.createElement('div');
        const circle = document.createElement('div');
        const infoWrapper = document.createElement('div');
        const infoWrapperBottom = document.createElement('div');
        const name = document.createElement('h4');
        const message = document.createElement('p');
        const date = document.createElement('p');

        outerDiv.classList.add('flex', 'w-5/6', 'mb-4', 'rounded-t-xl', 'rounded-br-xl', 'rounded-bl-md', 'text-xs', 'p-2');

        //Create cirl div holding image
        circle.classList.add('circle', 'outline-black', 'rounded-full', 'w-1/6', 'h-8', 'self-center', 'mr-3', 'mb-4');

        //Create infoWrapper to hold all the information in
        infoWrapper.classList.add('w-5/6', 'flex', 'flex-col');

        infoWrapperBottom.classList.add('flex', 'justify-between', 'textInfo', 'px-1', 'mt-1')

        name.innerText = item.name();
        name.style.fontSize = '10px'
        infoWrapperBottom.append(name)

        message.innerText = item.message();
        message.classList.add('message', 'rounded-xl', 'p-2')
        infoWrapper.append(message)

        date.innerText = item.date();
        date.style.fontSize = '10px';
        infoWrapperBottom.append(date);

        infoWrapper.append(infoWrapperBottom);

        outerDiv.append(circle)

        outerDiv.append(infoWrapper)

        this.container.append(outerDiv)


        console.log(item.type())
        if (item.type() == 'sent') {
            outerDiv.classList.add('text-gray-600', 'self-end', 'flex-end', 'justify-end');
            message.classList.add('bg-white', 'text-gray-600', 'shadow-md');
            circle.remove();
            // outerDiv.prepend(circle);
        } else if (item.type() == 'recieved') {
            outerDiv.classList.add('self-start');

            const randomPick = (arr: string[]) => {
                return Math.floor(Math.random() * arr.length)
            }

            const randomColor: string = colors[randomPick(colors)];
            const randomShade: string = shades[randomPick(shades)]

            console.log(`bg-${randomColor}-${randomShade}`)

            message.classList.add(`bg-${randomColor}-${randomShade}`, 'text-white')
            // outerDiv.append(circle);
        }

    }
}