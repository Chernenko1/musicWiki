export const createTables = () => {
  const DATA = {
    id: 1,
    group_id: 1,
    first_name: "Freddie",
    last_name: "Mercury",
    role_id: 1,
    biography: "Freddie Mercury was the legendary lead vocalist...",
  };
  let head: string[] = [];
  let body: any[] = [];

  for (let [key, value] of Object.entries(DATA)) {
    head.push(key);
    body.push(value);
  }
};
