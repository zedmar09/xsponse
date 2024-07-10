const role = ["Dealer", "Administrator", "Customer"];
const status = ["ACTIVE", "IN-ACTIVE"];

function getRandomItem(array: string[]) {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const SystemRoleList = Array.from({ length: 200 }, (_, i) => ({
  id: i + 1,
  noOfUser: getRandomNumber(1, 50),
  role: `${getRandomItem(role)} Role`,
  noOfPermissions: getRandomNumber(1, 50)
}));
