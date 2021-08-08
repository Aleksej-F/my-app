export const selectGists = (state) => {
    console.log(state)
    return state.gists.gists};
export const selectGistsError = (state) => state.gists.error;
export const selectGistsLoading = (state) => state.gists.loading;
