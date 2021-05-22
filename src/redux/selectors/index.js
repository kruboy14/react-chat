export const selectAllDialogs = (state) => state.dialogs.items;
export const selectCurrentDialogID = (state) => state.dialogs.currentDialogID;

export const selectAllMessages = (state) => state.messages.items;
export const selectIsLoading = (state) => state.messages.isLoading;

export const selectUserAuth = (state) => state.user.isAuth;
export const selectUserData = (state) => state.user.data;

export const selectAttachments = (state) => state.attachments.items;