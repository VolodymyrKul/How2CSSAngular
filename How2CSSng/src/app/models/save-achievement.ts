export class SaveAchievement {
    constructor(
        public title: string,
        public notes: string,
        public levelTitle: string,
        public userEmail: string,
        public completedCount: number,
        public correctCount: number,
        public currentMark: number
    ){}
}
