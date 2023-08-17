import { projects } from '../database/projects';
import { experiences } from '../database/experiences';
import { hobbies } from "../database/hobbies";
import { sortAscending } from "../utils/sort";

import type {HobbieProps, ExperienceProps,ProjectProps } from "../types/types";

sortAscending(projects)

export const useClientX = ()=> useState<number>('clientX', () => 0);
export const useClientY = ()=> useState<number>('clientY', () => 0);
export const useCounter = () => useState<number>('counter', () => 0);
export const useDataProjects = ()=> useState<ProjectProps[]>('projects', () => projects )
export const useDataExperiences = ()=> useState<ExperienceProps[]>('experiences', () => experiences )
export const useDataHobbies = ()=> useState<HobbieProps[]>('hobbies', () => hobbies )

