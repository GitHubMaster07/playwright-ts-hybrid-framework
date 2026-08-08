import { expect, test } from '../src/fixtures/testFixtures';

test('should display room types returned by the backend API', async ({ roomApi, roomsPage }) => {
  const apiRooms = await roomApi.getRoomsData();

  expect(apiRooms.length).toBeGreaterThan(0);

  const apiRoomTypes = [...new Set(apiRooms.map((room) => room.type))];

  await roomsPage.open();

  const uiRoomTypes = await roomsPage.getRoomTitles();

  expect(uiRoomTypes.length).toBeGreaterThan(0);

  for (const roomType of apiRoomTypes) {
    expect(uiRoomTypes).toContain(roomType);
  }
});
