export class TaskData {
    constructor(
        public questionText: string,
        public answer: string,
        public questionHtml: string,
        public metadata?: string
    ){}
}