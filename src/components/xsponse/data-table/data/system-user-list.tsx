const role = ["Dealer", "Administrator", "Customer"];
const status = ["ACTIVE", "IN-ACTIVE"];

function getRandomItem(array: string[]) {
  return array[Math.floor(Math.random() * array.length)];
}

export const SystemUserList = Array.from({ length: 200 }, (_, i) => ({
    id: (i + 1), 
    user: `System User ${i + 1}`,
    status: getRandomItem(status), 
    username: `username_00${i + 1}_test`,
    role: getRandomItem(role),
  }));