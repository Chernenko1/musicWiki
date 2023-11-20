import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface GroupsState {
  groupsData: {
    id: number;
    creation_year: number;
    city_id: number;
    group_name: string;
    music_style_id: number;
    description: string;
  }[];
  citiesData: {}[];
  musicStylesData: {}[];
  rolesData: {}[];
  bandmembersData: {}[];
  imageData: {}[];
  videosData: {}[];
  albumsData: {}[];
  albumsSalesData: {}[];
  songsData: {}[];
  concertTicketsData: {}[];
  concertsData: {}[];
  awardsData: {}[];
  labelGroupData: {}[];
  pressreleasesData: {}[];
}

const initialState: GroupsState = {
  // Массив для таблицы cities
  citiesData: [
    { id: 1, name: "Лондон" },
    { id: 2, name: "Ливерпуль" },
    { id: 3, name: "Сан-Франциско" },
    { id: 4, name: "Нью-Йорк" },
  ],

  // Массив для таблицы music_style
  musicStylesData: [
    { id: 1, name: "Рок" },
    { id: 2, name: "Метал" },
    { id: 3, name: "Поп" },
  ],

  // Массив для таблицы Groups
  groupsData: [
    {
      id: 1,
      creation_year: 1970,
      city_id: 1,
      group_name: "Queen",
      music_style_id: 1,
      description: `Queen — британская рок-группа, основанная в 1970 году в Лондоне. Она стала одной из наиболее влиятельных и успешных групп в истории рок-музыки. В состав Queen входили Фредди Меркьюри (вокал, пианино), Брайан Мэй (гитара, вокал), Роджер Тейлор (ударные, вокал) и Джон Дикон (бас-гитара). Группа известна своим уникальным стилем, включающим в себя элементы рока, попа, оперы и фэнтези.
      Queen выпустили множество хитов, среди которых "Bohemian Rhapsody", "We Will Rock You", "We Are the Champions", "Somebody to Love" и многие другие. Они славились эпическими аранжировками, виртуозными выступлениями и творческим подходом к музыке. Фредди Меркьюри считается одним из величайших вокалистов в истории рока.
      Группа имеет огромную базу поклонников по всему миру и оставила неизгладимый след в истории музыки. После смерти Фредди Меркьюри в 1991 году группа продолжила свою деятельность, сотрудничая с различными вокалистами, но оригинальный состав остается великим символом золотой эры рока.
      `,
    },
    {
      id: 2,
      creation_year: 1960,
      city_id: 2,
      group_name: "Beatles",
      music_style_id: 3,
      description: "The Beatles — легендарная британская рок-группа...",
    },
    {
      id: 3,
      creation_year: 1981,
      city_id: 3,
      group_name: "Metallica",
      music_style_id: 2,
      description: "Metallica — американская хэви-метал группа...",
    },
    {
      id: 4,
      creation_year: 2000,
      city_id: 4,
      group_name: "Linkin Park",
      music_style_id: 1,
      description: "Linkin Park — американская рок-группа...",
    },
    {
      id: 5,
      creation_year: 1994,
      city_id: 1,
      group_name: "Oasis",
      music_style_id: 3,
      description: "Oasis — английская рок-группа...",
    },
  ],

  // Массив для таблицы roles
  rolesData: [
    { id: 1, name: "Вокал" },
    { id: 2, name: "Гитара" },
    { id: 3, name: "Бас-гитара" },
    { id: 4, name: "Ударные" },
  ],

  // Массив для таблицы bandmembers
  bandmembersData: [
    {
      id: 1,
      group_id: 1,
      first_name: "Freddie",
      last_name: "Mercury",
      role_id: 1,
      biography: "Freddie Mercury was the legendary lead vocalist...",
    },
    {
      id: 2,
      group_id: 1,
      first_name: "A",
      last_name: "B",
      role_id: 1,
      biography: "Freddie Mercury was the legendary lead vocalist...",
    },
    // ... (остальные участники аналогичны)
  ],

  // Массив для таблицы image
  imageData: [
    { id: 1, image_data: "..." },
    // ... (дополните данными по вашему усмотрению)
  ],

  // Массив для таблицы videos
  videosData: [
    { id: 1, video_data: "..." },
    // ... (дополните данными по вашему усмотрению)
  ],

  // Массив для таблицы albums
  albumsData: [
    {
      id: 1,
      group_id: 1,
      image_id: 1,
      album_name: "A Night at the Opera",
      release_year: 1975,
      description:
        "A Night at the Opera is the fourth studio album by Queen...",
    },
    // ... (остальные альбомы аналогичны)
  ],

  // Массив для таблицы albums_sales
  albumsSalesData: [
    { id: 1, album_id: 1, album_sales: 30000000, copies_sold: 35000000 },
    // ... (дополните данными по вашему усмотрению)
  ],

  // Массив для таблицы songs
  songsData: [
    {
      id: 1,
      album_id: 1,
      song_name: "Bohemian Rhapsody",
      lyrics: "Is this the real life? Is this just fantasy?",
      duration: "00:05:55",
      music_style_id: 1,
    },
    // ... (остальные песни аналогичны)
  ],

  // Массив для таблицы concert_tickets
  concertTicketsData: [
    { id: 1, sold_tickets: 5000, price: 50.0, sale_date: "2023-01-01" },
    // ... (дополните данными по вашему усмотрению)
  ],

  // Массив для таблицы concerts
  concertsData: [
    {
      id: 1,
      group_id: 1,
      concert_name: "Queen Live in Concert",
      city_id: 1,
      date: "2023-04-15",
      sold_tickets_id: 1,
    },
    // ... (дополните данными по вашему усмотрению)
  ],

  // Массив для таблицы awards
  awardsData: [
    {
      id: 1,
      group_id: 1,
      award_name: "Grammy Award for Best Rock Performance",
      date: "2020-02-10",
    },
    // ... (дополните данными по вашему усмотрению)
  ],

  // Массив для таблицы label_group
  labelGroupData: [
    { group_id: 1, label_id: 1 },
    // ... (дополните данными по вашему усмотрению)
  ],

  // Массив для таблицы pressreleases
  pressreleasesData: [
    {
      id: 1,
      group_id: 1,
      public_date: "2023-04-01",
      headline: "Queen Announces New Album",
      text: "Legendary rock band Queen has announced the release of their highly anticipated new album.",
    },
    // ... (дополните данными по вашему усмотрению)
  ],
};

export const groupsSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {},
});

export const {} = groupsSlice.actions;

export const selectGroup = (state: RootState) => state.groups;

export default groupsSlice.reducer;
