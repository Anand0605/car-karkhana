import { carsInfo } from '../data/carDetails'

export const getBrandDetails = (nameOnly = true) => {
    if (nameOnly) {
        return carsInfo?.map(info => ({
            title: info.brandName,
            image: info.img
        }))
    }
    return carsInfo;
}

export const getModelDetails = (brandName, nameOnly = true) => {
    const brand = carsInfo?.find(info => info.brandName === brandName);
    if (nameOnly) {
        return brand.models?.map(modelInfo => ({
            title: modelInfo.name
        }));
    }
    return brand.models;
}

export const getVeriantDetails = (brandName, modelName, nameOnly = true) => {
    const brand = carsInfo?.find(info => info.brandName === brandName);
    const model = brand.models?.find(modelInfo => modelInfo.name === modelName);
    if (nameOnly) {
        return model.variants?.map(variantInfo => ({
            title: variantInfo.name
        }));
    }
    return model.variants;
}