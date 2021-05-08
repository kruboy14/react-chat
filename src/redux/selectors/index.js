export const selectAllDialogs = (state) => state.dialogs.items;
export const selectCurrentDialogID = (state) => state.dialogs.currentDialogID;

export const selectAllMessages = (state) => state.messages.items;
export const selectIsLoading = (state) => state.messages.isLoading;

export const selectUser = (state) => state.user.isAuth;