export const portfolioKinds = ["skill", "project", "experience", "certificate"] as const;

export type PortfolioKind = (typeof portfolioKinds)[number];

export interface PortfolioItem {
  id?: string;
  kind: PortfolioKind;
  title: string;
  description: string;
  imageSource: string;
  detailImageSource: string;
  showDetails: boolean;
  sortOrder: number;
  isPublished: boolean;
}

export interface AboutImage {
  id?: string;
  imageSource: string;
  altText: string;
  sortOrder: number;
  isPublished: boolean;
}

export interface PortfolioContent {
  aboutImages: AboutImage[];
  skills: PortfolioItem[];
  projects: PortfolioItem[];
  experience: PortfolioItem[];
  certificates: PortfolioItem[];
}
