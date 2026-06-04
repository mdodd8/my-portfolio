import type {TagInterface} from "./TagInterface.ts";

export interface PortfolioCardInterface {
    id: number;
    role: string;
    title: string;
    description: string;
    roleDescription: string;
    highlights: string[];
    tags: TagInterface[];
    image: string;
}
