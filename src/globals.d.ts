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

declare interface Concert {
  id: number;
  group_id: number;
  sold_tickets_id: number;
  city_id: number;
  concert_name: string;
  date: string;
}

declare interface City {
  id: number;
  city_name: string;
}

declare interface Song {
  id: number;
  album_id: number;
  music_style_id: number;
  song_name: string;
  lyrics: string;
  duration: { minutes: number; seconds: number };
}

declare interface PR {
  id: number;
  group_id: number;
  public_date: string;
  headline: string;
  text: string;
}

declare interface Award {
  id: number;
  group_id: number;
  award_name: string;
  date: string;
}
