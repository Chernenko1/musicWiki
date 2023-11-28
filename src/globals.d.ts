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
  album_sales: number;
  "music_style.style_name"?: string;
}

declare interface BandMember {
  id: number;
  group_id: number;
  role_id: number;
  first_name: string;
  last_name: string;
  biography: string;
  "role.role_name"?: string;
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
  duration: string;
  "music_style.style_name"?: string;
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

declare interface MusicStyles {
  id: number;
  style_name: string;
}

declare interface Concert {
  id: number;
  group_id: number;
  concert_name: string;
  city_id: number;
  date: string;
  sold_tickets_id: number;
  "concert_ticket.sold_tickets"?: number;
  "concert_ticket.price"?: number;
  "concert_ticket.sale_date"?: string;
  "city.city_name"?: string;
}
