import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(advancedFormat);
dayjs.extend(relativeTime);

const keyInterests = ["X-Shield", "X-Display", "X-Wearable", "X-Detect"];
const pricingLevels = ["GOLD", "SILVER", "DIAMOND"];
const status = ["ACTIVE", "IN-ACTIVE"];
const applicationStatus = ["partially_approved_submitted", "partially_approved_pending", "pending"];

function getRandomItem(array: string[]) {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomDate(start: dayjs.Dayjs, end: dayjs.Dayjs) {
  const diff = end.diff(start, 'days');
  const randomDays = Math.floor(Math.random() * diff);
  return start.add(randomDays, 'days');
}

function formatFullDate(date: dayjs.Dayjs) {
  return date.format('MMM. D, YYYY');
}

function computeDuration(date: dayjs.Dayjs) {
  return date.fromNow();
}

export const DealerList = Array.from({ length: 200 }, (_, i) => {
  const applicationDate = getRandomDate(dayjs().subtract(1, 'year'), dayjs());
  return {
    ID: (i + 1),
    CompanyName: `Company Name ${i + 1}`,
    PrimaryContact: `First Name Last Name`,
    AddressLine: `Address Line 1`,
    KeyInterest: getRandomItem(keyInterests),
    PricingLevel: getRandomItem(pricingLevels),
    Status: getRandomItem(status),
    ApplicationStatus: getRandomItem(applicationStatus),
    ApplicationDate: formatFullDate(applicationDate), 
    ApplicationDuration: computeDuration(applicationDate),
  };
});
