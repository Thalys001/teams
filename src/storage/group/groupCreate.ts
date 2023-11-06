import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { groupsGetAll } from "./groupsGetAll";
import { GROUP_COLLECTION } from "@storage/storageConfig";

export async function groupCreate(newGroup: string) {
  try {
    const storadeGroups = await groupsGetAll();

    const groupAlredyExists = storadeGroups.includes(newGroup);

    if (groupAlredyExists) {
      throw new AppError('Já existe um grupo cadastrado com este nome.');
    }

    const storage = JSON.stringify([...storadeGroups, newGroup]);
    await AsyncStorage.setItem(GROUP_COLLECTION, storage);

  } catch (error) {
    throw error;
  }
}