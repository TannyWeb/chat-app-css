import { HasFormatter } from '../interfaces/hasFormatter';

export class Message implements HasFormatter {
    constructor(
        readonly myName: string,
        readonly myMessage: string,
        readonly dateNow: string,
        readonly myPicture: string,
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

    picture() {
        return this.myPicture
    }

    type() {
        return this.typeOf
    }


}