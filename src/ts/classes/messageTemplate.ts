import { HasFormatter } from '../interfaces/hasFormatter';

export class MessageTemplate {
    constructor(private container: HTMLDivElement) {

    }

    render(item: HasFormatter) {
        const h4 = document.createElement('h4');
        h4.innerText = item.name();
        this.container.append(h4)

        const p = document.createElement('p');
        p.innerText = item.message();
        this.container.append(p)

        const d = document.createElement('p');
        d.innerText = item.date()
        this.container.append(d)
    }
}