import type {TagInterface} from "./TagInterface.ts";

export interface SkillsInterface {
    id: number;
    title: string;
    description: string;
    tags:TagInterface[];
}