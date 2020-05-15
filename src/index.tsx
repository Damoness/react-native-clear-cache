import { NativeModules } from 'react-native';

const { ClearCache } = NativeModules;

async function getCacheSize() {
  try {
    const array = await ClearCache.getCacheSize();

    const fileSize = array[0];
    const fileSizeUnit = array[1];

    return {
      fileSize: fileSize,
      unit: fileSizeUnit,
    };
  } catch (error) {
    throw error;
  }
}

async function runClearCache() {
  try {
    await ClearCache.runClearCache();
  } catch (error) {
    throw error;
  }
}

export default {
  runClearCache,
  getCacheSize,
};
