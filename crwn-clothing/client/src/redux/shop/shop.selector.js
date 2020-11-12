import { createSelector } from "reselect";


const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
);

export const selectorCollectionFetching = createSelector(
    [selectShop],
    (selectShop) => selectShop.isFetching
);

export const selectIsCollectionLoaded = createSelector(
    [selectShopCollections],
    (collections) => !!collections
);

export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    (collections) => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam => createSelector(
    [selectShopCollections],
    (collections) => collections ? collections[collectionUrlParam] : null
);