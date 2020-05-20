import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectDirectoryItems = createSelector(
    [selectDirectory],
    directory => directory.sections
)

export const isLoading = createSelector(
    [selectDirectory],
    directory => directory.isFetching
);

export const isError = createSelector(
    [selectDirectory],
    directory => directory.isError
);