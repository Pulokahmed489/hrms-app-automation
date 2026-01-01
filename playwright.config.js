import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

// Default env = local

const env = process.env.ENV || 'local';

// Load correct end file
dotenv.config({ path: `.env.${env}` });

export default defineConfig({
  testDir: './tests',
  timeout: 10 * 1000,

  use: {
    baseURL: process.env.BASE_URL,
    headless: false,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },
  reporter: [['allure-playwright']],
});
