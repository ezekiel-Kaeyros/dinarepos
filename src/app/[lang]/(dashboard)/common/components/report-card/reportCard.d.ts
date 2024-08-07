export enum Category {
  Uncategorized = 'Uncategorized',
  Cleaned = 'Cleaned',
  Raw = 'Raw',
  Dangerous = '!Dangerous',
  Categorized = 'Categorized',
  Cleaned = 'Cleaned',
  Irrelevant = 'Irrelevant',
  Managed = 'Managed',
}

export type ReportCardProps = {
  href?: string;
  id?: string | number;
  title: string;
  date: string;
  href?:string
  reportType:
    | 'Uncategorized'
    | 'Raw'
    | 'Irrelevant'
    | '!Dangerous'
    | 'Categorized'
    | 'Managed'
    | 'Cleaned';
};
