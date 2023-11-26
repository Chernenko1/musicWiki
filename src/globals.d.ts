declare interface Roles {
  id: number;
  role_name: string;
}

declare interface Album {
  id: number;
  group_id: number;
  image_id: number;
  album_name: string;
  release_year: number;
  description: string;
  music_style_id: number;
  albums_sales: number;
}

declare interface BandMember {
  id: number;
  group_id: number;
  role_id: number;
  first_name: string;
  last_name: string;
  biography: string;
}
