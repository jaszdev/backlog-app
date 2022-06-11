export const environment = {
  production: false,
  dbURL: 'https://backlop-app-default-rtdb.firebaseio.com'
};

export function getItemId() {
  const max = 99999;
  const min = 10000;
  return Math.floor(Math.random() * (max - min + 1) + min)
} 