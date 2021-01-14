import { HasFormatter } from '../interfaces/hasFormatter';

export class SendMessage implements HasFormatter {
    constructor(
        readonly myName: string,
        readonly myMessage: string,
        readonly dateNow: string
    ) { }

    name() {
        return this.myName
    }

    message() {
        return this.myMessage
    }

    date() {
        return this.dateNow
    }

}