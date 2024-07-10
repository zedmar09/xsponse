const keyInterests = ["X-Shield", "X-Display", "X-Wearable", "X-Detect"];
const pricingLevels = ["GOLD", "SILVER", "DIAMOND"];

function getRandomItem(array: string[]) {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomDate() {
  const start = new Date(2023, 0, 1);
  const end = new Date(2024, 11, 31);
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );
}

export const dealerList = Array.from({ length: 200 }, (_, i) => ({
    id: (i + 1), // Convert id to string
    dealerName: `Dealer ${i + 1}`,
    dealerEmail: `dealer${i + 1}@example.com`,
    keyInterest: getRandomItem(keyInterests),
    primaryContact: `Primary Contact Name ${i + 1}`,
    secondaryContact: `Secondary Contact Name ${i + 1}`,
    applicationDate: getRandomDate(),
    pricingLevel: getRandomItem(pricingLevels),
  }));