import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectCollection = createSelector(
    [selectShop],
    shop => shop.collection
)

export const selectCollectionItems = createSelector(
    [selectCollection],
    collection => collection ? Object.keys(collection).map(key => collection[key]) : []
)

export const selectCollectionId = collectionId => {
    return  createSelector(
        [selectCollection],
        collection => collection ? collection[collectionId] : null
    )
}

export const isFetchingData =  createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const isFetchingCollectionData =  createSelector(
    [selectCollection],
    collection => collection ? false : true
)