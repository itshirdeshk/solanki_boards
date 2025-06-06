import { atom } from 'recoil';

// Add CourseType enum
export enum CourseType {
  ACADEMIC = "ACADEMIC",
  DIPLOMA = "DIPLOMA",
  CERTIFICATE = "CERTIFICATE",
  DEGREE = "DEGREE",
  POST_GRADUATE = "POST_GRADUATE",
  PHD = "PHD"
}

export enum SubjectType {
  LANGUAGE = "LANGUAGE",
  NON_LANGUAGE = "NON_LANGUAGE",
  VOCATIONAL = "VOCATIONAL"
}

// Add interfaces for Course and Subject
export interface Subject {
  id: string;
  name: string;
  code: string;
  fees?: number;
  type: SubjectType;
  courseId: string;
}

export interface Course {
  id: string;
  name: string;
  code?: string;
  fees?: number;
  courseType: CourseType;
  subjects: Subject[];
}

// Static data atoms
export const staticDataAtoms = {
  coursesAtom: atom<Course[]>({
    key: 'staticData/coursesAtom',
    default: []
  }),

  subjectsAtom: atom<Array<Subject>>({
    key: 'staticData/subjectsAtom',
    default: [],
  }),

  institutesAtom: atom<Array<{ id: string; name: string }>>({
    key: 'staticData/institutesAtom',
    default: [],
  }),
}; 