import { Stringifier } from "../../../node_modules/postcss/lib/postcss";


export interface HasFormatter {
    name(): string;
    message(): string;
    date(): string;
    type(): string;
}

