function getRandomDate() {
  const start = new Date(2023, 0, 1);
  const end = new Date(2024, 11, 31);
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );
}

export const customerList = Array.from({ length: 200 }, (_, i) => ({
    id: (i + 1), 
    customerName: `Customer ${i + 1}`,
    email: `customer${i + 1}@example.com`,
    dealerName: `Dealer ${i + 1}`,
    applicationDate: getRandomDate(),
  }));