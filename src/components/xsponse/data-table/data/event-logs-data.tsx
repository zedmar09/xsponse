import dayjs from 'dayjs';

interface EventLog {
    ID: number;
    TimeStamp: string;
    EventID: number;
    DeviceID: number;
    Location: string;
    Status: string;
}

const locations = ['Gymnasium', 'Faculty Room', 'Principal Room', 'Auditorium'];
const statuses = ['SUCCESS', 'ERROR'];

const generateRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateRandomDate = (): string => {
    const year = 2024;
    const month = generateRandomNumber(1, 12);
    const day = generateRandomNumber(1, 28);
    const hour = generateRandomNumber(0, 23);
    const minute = generateRandomNumber(0, 59);
    const second = generateRandomNumber(0, 59);
    return dayjs(new Date(year, month - 1, day, hour, minute, second)).format('YYYY-MM-DD hh:mm:ss A');
};

const EventLogsData: EventLog[] = Array.from({ length: 200 }, (_, index) => ({
    ID: index + 1,
    TimeStamp: generateRandomDate(),
    EventID: generateRandomNumber(1000, 9999),
    DeviceID: generateRandomNumber(1000, 9999),
    Location: locations[generateRandomNumber(0, locations.length - 1)],
    Status: statuses[generateRandomNumber(0, statuses.length - 1)],
}));

export default EventLogsData;
