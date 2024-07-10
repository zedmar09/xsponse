const getRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomStatus = () => ['ACTIVE', 'IN-ACTIVE'][Math.floor(Math.random() * 2)];

export const customerDeviceList = Array.from({ length: 200 }, () => ({
  deviceNumber: `${getRandomNumber(1000, 9999)}-${getRandomNumber(1000, 9999)}`,
  deviceName: "X-Communicate Ceiling Speaker",
  status: getRandomStatus(),
}));
