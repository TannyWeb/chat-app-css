import { HasFormatter } from '../interfaces/hasFormatter';

export class MessageTemplate {
    constructor(private container: Element) {

    }

    render(item: HasFormatter) {
        const div = document.createElement('div')
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