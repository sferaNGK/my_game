export interface IQuestion {
    question: string,
    question_file: string | null,
    answer: string,
    points: number,
    isHidden: boolean,
}