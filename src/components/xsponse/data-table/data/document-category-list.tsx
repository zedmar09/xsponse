interface CategoryListing {
    ID: number;
    CategoryName: string;
    CategoryDescription: string;
}

const DocumentCategoryList: CategoryListing[] = Array.from({ length: 200 }, (_, index) => ({
    ID: index + 1,
    CategoryName: `Category00${index + 1}`,
    CategoryDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
}));

export default DocumentCategoryList;
