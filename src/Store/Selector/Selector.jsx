export const selectArticleItem = (state) => state.ads.articleItem;
export const selectArticleId = (state) => state.ads.articleId;
export const selectTimestamp = (state) => state.data.timestamp;
export const selectSearchItem = (state) => state.ads.searchItem;
export const selectDateString = (state) => state.data.dateString;
export const selectShowModal = (state) => state.ads.showModal;
export const selectIsUserLogdIn = (state) => state.auth.access !== "";
export const selectUser = (state) => state.user.userProfile;
