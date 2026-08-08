import { APIRequestContext, APIResponse } from '@playwright/test';

export type Room = {
  roomid: number;
  roomName: string;
  type: string;
  accessible: boolean;
  roomPrice: number;
  features: string[];
};

type RoomsResponse = {
  rooms: Room[];
};

export class RoomApiClient {
  private static readonly baseUrl = 'https://automationintesting.online/api';

  constructor(private readonly request: APIRequestContext) {}

  async getRooms(): Promise<APIResponse> {
    return this.request.get(`${RoomApiClient.baseUrl}/room/`);
  }

  async getRoomsData(): Promise<Room[]> {
    const response = await this.getRooms();

    if (!response.ok()) {
      throw new Error(`Failed to retrieve rooms: ${response.status()} ${response.statusText()}`);
    }

    const body = (await response.json()) as RoomsResponse;

    return body.rooms;
  }
}
