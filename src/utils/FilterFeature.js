
/**
 * FilterFeatureHandler is to filter item if therir feature it exist if not then add the item in the exsiting array
 * 
 * @param (Array) type - Array of feature Type
 * @param (string) type - type of feature to filter
 * @returns a Array with filter
 */
const FilterFeatureHandler = (featureType, type) =>
    featureType.includes(type) ? [...featureType.filter(item => item !== type)] : [...featureType, type];
export { FilterFeatureHandler };