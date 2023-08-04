type Link = {
    type:string,
    name:string,
    url:string,
}
export interface ProjectProps {
    id: number
    year: number
    project: string
    company: string
    stack: string[]
    link?: Link
    imgUrl?:string
}

export interface ExperienceProps {
    id: number;
    job: string;
    company: string;
    start: number;
    end: number;
    description: string;
    stack: string[];
    link?: string;
}

export interface HobbieProps {
    id: number;
    start: number;
    end: number;
    title: string;
    role: string;
    branch: string;
    link?: string;
    imgUrl?:string;
}