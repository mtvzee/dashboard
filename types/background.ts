export type BackgroundType = {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: null;
  alt_description: string;
  urls: Urls;
  links: BackgroundTypeLinks;
  categories: any[];
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: null;
  topic_submissions: TopicSubmissions;
  user: User;
  exif: Exif;
  location: Location;
  views: number;
  downloads: number;
};

export type Exif = {
  make: string;
  model: string;
  name: string;
  exposure_time: string;
  aperture: string;
  focal_length: string;
  iso: number;
};

export type BackgroundTypeLinks = {
  self: string;
  html: string;
  download: string;
  download_location: string;
};

export type Location = {
  title: string;
  name: string;
  city: null;
  country: string;
  position: Position;
};

export type Position = {
  latitude: number;
  longitude: number;
};

export type TopicSubmissions = {};

export type Urls = {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
};

export type User = {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: null;
  portfolio_url: string;
  bio: null;
  location: null;
  links: UserLinks;
  profile_image: ProfileImage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
};

export type UserLinks = {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
};

export type ProfileImage = {
  small: string;
  medium: string;
  large: string;
};

export type Social = {
  instagram_username: string;
  portfolio_url: string;
  twitter_username: null;
  paypal_email: null;
};
