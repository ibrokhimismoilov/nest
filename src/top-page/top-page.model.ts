export enum TopLavelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export class TopPageModel {
  firstLavelCategory: TopLavelCategory;
  secondCategory: string;
  title: string;
  category: string;
  hh?: {
    count: number;
    juniorSelary: number;
    middleSelary: number;
    seniorSelary: number;
  };
  advantages: {
    title: string;
    description: string;
  }[];

  seoText: string;
  tagsTitle: string;
  tags: string[];
}
