import { create } from "zustand";

type ServiceRequestStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useServiceRequest = create<ServiceRequestStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
