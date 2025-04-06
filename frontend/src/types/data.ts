// src/types/data.ts
export type EducationJobCategory =
  | 'Research & Development (IT Related)'
  | 'IT Education & Training'
  | 'General IT Management'
  | 'IT Security'
  | 'Data Management'
  | 'Software Development'
  | 'Communications & Networks'
  | 'IT Sales & Marketing'
  | 'Technical Services'
  | 'Infrastructure & Operations Support';

export interface EducationDataItem {
  'Job Category': EducationJobCategory;
  'Secondary or Below': string;
  'Diploma / Certificate': string;
  'Sub-degree': string;
  'First Degree': string;
  'Postgraduate Degree': string;
  'No. of Full-time Employees': string;
  '% of Full-time Employees': string;
}

export interface SalaryDataItem {
  'Job Category': EducationJobCategory;
  '20000_or_Below': string;
  '20001_30000': string;
  '30001_50000': string;
  '50001_90000': string;
  '90001_or_More': string;
}

export interface ExperienceDataItem {
  'Job Category': EducationJobCategory;
  'Less than 1 Year or No experience is required': string;
  '1 Year to less than 3 Years': string;
  '3 Years to less than 6 Years': string;
  '6 Years to less than 10 Years': string;
  '10 Years or above': string;
}1