import dayjs from 'dayjs';

interface EventLog {
    ID: number;
    DocumentName: string;
    Category: string;
    DocumentType: string;
    UploadedDate: string;
    Viewers: string;
    FileSize: number;
    Status: string;
}

const DocumentName = ['Product Manual', 'Promotional Video', 'Installation Guide', 'Reminders'];
const Category = ['Manual', 'Marketing', 'Guides', 'Notes']
const DocumentType = ['PDF', 'MP3', 'MP4'];
const Viewers = ['Dealers', 'Customers', 'Dealers | Customers'];
const Status = ['Visible', 'Hidden']

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
    return dayjs(new Date(year, month - 1, day, hour, minute, second)).format('YYYY-MM-DD');
};

const DocumentList: EventLog[] = Array.from({ length: 200 }, (_, index) => ({
    ID: index + 1,
    DocumentName: DocumentName[generateRandomNumber(0, DocumentName.length - 1)],
    Category: Category[generateRandomNumber(0, Category.length - 1)],
    DocumentType: DocumentType[generateRandomNumber(0, DocumentType.length - 1)],
    UploadedDate: generateRandomDate(),
    Viewers: Viewers[generateRandomNumber(0, Viewers.length - 1)],
    FileSize: generateRandomNumber(1, 999),
    Status: Status[generateRandomNumber(0, Status.length - 1)],
}));

export default DocumentList;
