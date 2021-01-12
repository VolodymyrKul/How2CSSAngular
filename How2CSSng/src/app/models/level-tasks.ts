import { Difficulty } from "./enums/difficulty";
import { TaskDistributionDetailed } from "./task-distribution-detailed";

export interface LevelTasks {
    isShowTasks: boolean;
    id: number;
    title: string;
    tasksCount: number;
    levelDifficulty: Difficulty;
    taskDistributions: TaskDistributionDetailed[];
}
