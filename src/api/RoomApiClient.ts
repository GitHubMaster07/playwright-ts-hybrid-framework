import { APIRequestContext, APIResponse } from '@playwright/test';
import { environment } from '../config/environment';

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
  constructor(private readonly request: APIRequestContext) {}

  async getRooms(): Promise<APIResponse> {
    return this.request.get(`${environment.roomsApiUrl}/room/`);
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
