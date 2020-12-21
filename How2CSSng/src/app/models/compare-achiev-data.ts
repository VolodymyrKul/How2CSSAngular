export class CompareAchievData {
    constructor(
        public trainingTestTitle?: string,
        public ownCompletedCount?: string,
        public ownCorrectCount?: string,
        public ownCurrentMark?: string,
        public antCompletedCount?: string,
        public antCorrectCount?: string,
        public antCurrentMark?: string
    ) { }
}
