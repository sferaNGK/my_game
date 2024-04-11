import { ITopic } from "./ITopic";

export interface IGame {
    id: string,
    title: string,
    topics: ITopic[],
}