import { HasFormatter } from '../interfaces/hasFormatter';

export class Message implements HasFormatter {
    constructor(
        readonly myName: string,
        readonly myMessage: string,
        readonly dateNow: string,
        readonly typeOf: string
    ) {
    }
    name() {
        return this.myName
    }

    message() {
        return this.myMessage
    }

    date() {
        return this.dateNow
    }

    type() {
        return this.typeOf
    }


}