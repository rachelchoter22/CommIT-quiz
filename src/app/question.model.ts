export class QuestionModel {
    desc: string;
    options: Option[]
}
export class Option {
    name: string;
    isChoosen: boolean;
    isRight: boolean;
}


