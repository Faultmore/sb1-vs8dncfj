export interface Department {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: React.ComponentType;
}