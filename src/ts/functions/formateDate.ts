const hour = new Date().getHours();
let mins = new Date().getMinutes();
let newMin = '';
mins < 10 ? newMin = `0${mins}` : newMin = `${mins}`;

export const formattedDate = `${hour}:${newMin}`;