import dotenv from 'dotenv';

dotenv.config({ quiet: true });

export const environment = {
  baseUrl: process.env.BASE_URL ?? 'https://www.saucedemo.com',

  usersApiUrl: process.env.USERS_API_URL ?? 'https://jsonplaceholder.typicode.com',

  roomsApiUrl: process.env.ROOMS_API_URL ?? 'https://automationintesting.online/api',

  roomsUiUrl: process.env.ROOMS_UI_URL ?? 'https://automationintesting.online',
} as const;
