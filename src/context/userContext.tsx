import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { getStoreData } from '../storage';

interface IStatusUser {
  firstAccess: boolean,
  setFirstAccess: any
}

const UserContext = createContext({} as IStatusUser);

export function UserProvider({ children }: { children: ReactNode }) {
  const [firstAccess, setFirstAccess] = useState(false);

  useEffect(() => {
    (async () => {
      const isFirstAccess = await getStoreData({ storageKey: 'firstAccess' });

      if (!!isFirstAccess) {
        setFirstAccess(true)
      }
    })()
  }, [])

  return (
    <UserContext.Provider value={{ firstAccess, setFirstAccess }}>
      {children}
    </UserContext.Provider>
  );
}
export const userStatus = () => useContext(UserContext);