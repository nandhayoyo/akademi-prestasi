import { create } from "zustand";

const useItemStore = create((set) => ({
  items: [],
  setItems: (items) => set({ items }),
  limit: 3,
  setLimit: (limit) => set({ limit }),
  itemDetail: [],
  setItemDetail: (itemDetail) => set({ itemDetail }),
}));

export default useItemStore;
