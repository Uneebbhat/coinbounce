import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  id: string;
  name: string;
  email: string;
  image: File | string;
}

interface Store {
  user: User;
  setUser: (user: Partial<User>) => void;
}

const useUserStore = create<Store>()(
  persist(
    (set) => ({
      user: {
        id: "",
        name: "",
        email: "",
        image: "https://github.com/shadcn.png",
      },
      setUser: (user) =>
        set((state) => ({
          user: { ...state.user, ...user },
        })),
    }),
    {
      name: "user-store",
      partialize: (state) => ({ user: state.user }),
    }
  )
);

export default useUserStore;
