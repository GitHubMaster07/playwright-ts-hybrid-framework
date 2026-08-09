import { APIRequestContext, APIResponse } from '@playwright/test';
import { z } from 'zod';
import { environment } from '../config/environment';

const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  username: z.string(),
  email: z.string().email(),
});

export type User = z.infer<typeof userSchema>;

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

    const body = await response.json();
    const data = userSchema.parse(body);

    return {
      response,
      data,
    };
  }
}
