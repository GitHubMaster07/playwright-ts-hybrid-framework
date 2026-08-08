import { APIRequestContext, APIResponse } from '@playwright/test';

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export class UserApiClient {
  private static readonly baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private readonly request: APIRequestContext) {}

  async getUser(userId: number): Promise<APIResponse> {
    return this.request.get(`${UserApiClient.baseUrl}/users/${userId}`);
  }

  async getUserData(userId: number): Promise<User> {
    const response = await this.getUser(userId);

    if (!response.ok()) {
      throw new Error(
        `Failed to retrieve user ${userId}: ${response.status()} ${response.statusText()}`
      );
    }

    return (await response.json()) as User;
  }
}
