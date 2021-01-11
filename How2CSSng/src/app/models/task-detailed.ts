import { Difficulty } from "./enums/difficulty";
import { TaskResult } from "./task-result";

export interface TaskDetailed {
    attemptsCount: number;
    bestScore: string;
    id: number;
    question: string;
    answer: string;
    taskDifficulty: Difficulty;
    taskResults: TaskResult[];
}
