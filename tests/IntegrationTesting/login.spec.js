import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage'; 
import { BASE_URL, USERNAME, PASSWORD } from '../utils/envConfig';


test('Login to sauce application with valid credentials', async ({page}) => {
  const loginPage = new LoginPage(page);
  await page.goto(BASE_URL);
  await loginPage.login(USERNAME, PASSWORD);
})
// note 