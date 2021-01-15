import { HasFormatter } from '../interfaces/hasFormatter';

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
        circle.classList.add('circle', 'outline-black', 'rounded-full', 'w-1/6', 'h-10', 'self-center', 'mr-3', 'mb-4');

        //Create infoWrapper to hold all the information in
        infoWrapper.classList.add('w-5/6', 'flex', 'flex-col');

        infoWrapperBottom.classList.add('flex', 'justify-between', 'textInfo', 'px-1', 'mt-1')

        name.innerText = item.name();
        name.style.fontSize = '10px'
        infoWrapperBottom.append(name)

        message.innerText = item.message();
        message.classList.add('rounded-xl', 'bg-red-500', 'text-white', 'p-2')
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
            outerDiv.classList.add('bg-white', 'text-gray-600', 'shadow-lg', 'self-end');
            // outerDiv.prepend(circle);
        } else if (item.type() == 'recieved') {
            outerDiv.classList.add('self-start');
            // outerDiv.append(circle);
        }

    }
}