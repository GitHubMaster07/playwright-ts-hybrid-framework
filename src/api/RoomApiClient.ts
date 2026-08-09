import { APIRequestContext, APIResponse } from '@playwright/test';
import { z } from 'zod';
import { environment } from '../config/environment';

const roomSchema = z.object({
  roomid: z.number(),
  roomName: z.string(),
  type: z.string(),
  accessible: z.boolean(),
  roomPrice: z.number(),
  features: z.array(z.string()),
});

const roomsResponseSchema = z.object({
  rooms: z.array(roomSchema),
});

export type Room = z.infer<typeof roomSchema>;

export type RoomsResponse = {
  response: APIResponse;
  data: Room[];
};

export class RoomApiClient {
  constructor(private readonly request: APIRequestContext) {}

  async getRooms(): Promise<RoomsResponse> {
    const response = await this.request.get(`${environment.roomsApiUrl}/room/`);

    if (!response.ok()) {
      throw new Error(`Failed to retrieve rooms: ${response.status()} ${response.statusText()}`);
    }

    const body = await response.json();
    const data = roomsResponseSchema.parse(body);

    return {
      response,
      data: data.rooms,
    };
  }

  async getRoomsData(): Promise<Room[]> {
    const { data } = await this.getRooms();

    return data;
  }
}
