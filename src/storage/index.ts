import AsyncStorage from "@react-native-async-storage/async-storage";

enum StorageKeys {
  city,
  firstAccess,
  country,
}
type StorageKeyProps = keyof typeof StorageKeys;


interface IGetStoreData {
  storageKey: StorageKeyProps,
}

export const getStoreData= async ({storageKey}:IGetStoreData) => {
  try {
    const value = await AsyncStorage.getItem(`@${storageKey}`)
    if(value !== null) {
      return value
    }
  } catch(e) {
    // error reading value
  }
}

interface ISetStoreData {
  storageKey: StorageKeyProps,
  value: string
}
export const setStoreData = async ({storageKey, value}:ISetStoreData) => {
  try {
    await AsyncStorage.setItem(`@${storageKey}`, value)
  } catch (error) {
    console.log(error)
  }
}

export const removeItemStoreData = async (item:StorageKeyProps)=> {
  try {
    await AsyncStorage.removeItem(`@${item}`);
    console.log('Item removido com sucesso!');
  } catch (error) {
    console.error(error);
  }
}