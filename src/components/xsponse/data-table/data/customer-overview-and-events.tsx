import dayjs from 'dayjs';

const getRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomAmount = () => `$${(Math.random() * 1000).toFixed(2)}`;
const getRandomStatus = () => ['SUCCESSFUL', 'PENDING'][Math.floor(Math.random() * 2)];
const getRandomDate = () => dayjs().subtract(getRandomNumber(0, 3650), 'day').format('DD MMM YYYY h:mm A');
const getRandomEvent = () => ['Button Activated', 'Button Cancelled', 'Button Deactivated'][Math.floor(Math.random() * 3)];

export const customerOverviewAndEvents = Array.from({ length: 200 }, () => ({
  invoiceNumber: `${getRandomNumber(1000, 9999)}-${getRandomNumber(1000, 9999)}`,
  status: getRandomStatus(),
  amount: getRandomAmount(),
  date: getRandomDate(),
  event: getRandomEvent()
}));
