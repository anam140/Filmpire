import create from 'zustand';

import { devtools, persist } from 'zustand/middleware';

type currView = 'Log In' | 'Sign Up' | 'Reset Password';

interface AuthState {
  isOpen: boolean;
  view: currView;
  ModalOpenHandler: (status: currView) => void;
  ModalCloseHandler: () => void;
}

const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        isOpen: false,
        view: 'Log In',
        ModalCloseHandler: () => set(() => ({ isOpen: false })),
        ModalOpenHandler: (Cview) => {
          set((state) => ({ ...state, isOpen: true, view: Cview }));
        },
      }),
      {
        name: 'auth-state',
      },
    ),
  ),
);

export default useAuthStore;
