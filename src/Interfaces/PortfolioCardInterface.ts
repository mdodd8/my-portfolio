export interface PortfolioCardInterface {
    id: number;
    title: string;
    description: string;
    role: string;
    tags: { label: string; color: string }[];
    thumbBg: string;
    image: string;
    gallery: { image: string} [];
}