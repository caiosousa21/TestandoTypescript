export const Types = {
    SELECTED_SEARCH: 'navBar/SELECTED_SEARCH',
    SELECTED_ADD: 'navBar/SELECTED_ADD',
    SELECTED_WISHLIST: 'navBar/ SELECTED_WISHLIST',
    SELECTED_SETTINGS: 'navBar/SELECTED_SETTINGS'
};
export const Creators = {
    selectedSearch: () => ({
        type: Types.SELECTED_SEARCH
    }),
    selectedAdd: () => ({
        type: Types.SELECTED_ADD
    }),
    selectedWishlist: () => ({
        type: Types.SELECTED_WISHLIST
    }),
    selectedSettings: () => ({
        type: Types.SELECTED_SETTINGS
    }),
};
