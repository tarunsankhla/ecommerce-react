
/**
 * FilterCategoryHandler is to filter item if it exist if not then add the item in the exsiting array
 * 
 * @param (Array) type - Array of CategoryType
 * @param (string) type - type of category to filter
 * @returns a Array with filter
 */
const FilterCategoryHandler = (categoryType, type) =>
    categoryType.includes(type) ? [...categoryType.filter(item => item !== type)] : [...categoryType, type];
export { FilterCategoryHandler };