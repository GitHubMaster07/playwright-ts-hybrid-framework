import { APIRequestContext, APIResponse } from '@playwright/test';
import { environment } from '../config/environment';

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export type UserResponse = {
  response: APIResponse;
  data: User;
};

export class UserApiClient {
  constructor(private readonly request: APIRequestContext) {}

  async getUser(userId: number): Promise<UserResponse> {
    const response = await this.request.get(`${environment.usersApiUrl}/users/${userId}`);

    if (!response.ok()) {
      throw new Error(
        `Failed to retrieve user ${userId}: ${response.status()} ${response.statusText()}`
      );
    }

    const data = (await response.json()) as User;

    return {
      response,
      data,
    };
  }
}
