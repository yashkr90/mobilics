import { create } from "zustand";

export const usePage = create((set) => ({
  page: 1,
  updatePage: (newpage) => {
    console.log("newpage is", newpage);
    set(() => ({page:newpage})
      
    );

    // console.log("page after updt state.page ",page)
  },
}));
