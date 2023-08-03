import { projects } from '../database/projects'
interface Project {
  id: number;
  year: number;
  project: string;
  company: string;
  stack: string[];
  link?: {
    type: string;
    name: string;
    url: string;
  };
}
export const useClientX = ()=> useState<number>('clientX', () => 0);
export const useClientY = ()=> useState<number>('clientY', () => 0);
export const useCounter = () => useState<number>('counter', () => 0);
export const useDataProjects = ()=> useState<Project[]>('projects', () => projects )