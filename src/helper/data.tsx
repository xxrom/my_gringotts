import AsyncStorage from '@react-native-community/async-storage';
import { StepProps } from '@containers/Steps';

const storeSteps = async (
  steps: Array<StepProps>,
): Promise<Array<StepProps>> => {
  try {
    await AsyncStorage.setItem('steps', JSON.stringify(steps));
    console.log('storeSteps inside  !!!');
    return steps;
  } catch (error) {
    console.error('error storeSteps !!!', error);
    return [];
  }
};
const getSteps = async () => {
  try {
    const value = JSON.parse(
      (await AsyncStorage.getItem('steps')) || 'no data!',
    );
    if (value === null) {
      return null;
    }
    console.log(value);
    return value;
  } catch (error) {
    console.error('error getSteps !!!', error);
    return false;
  }
};

const storeParams = async (params: object): Promise<object> => {
  try {
    await AsyncStorage.setItem('params', JSON.stringify(params));
    console.log('storeParams inside  !!!');
    return params;
  } catch (error) {
    console.error('error storeData !!!', error);
    return [];
  }
};
const getParams = async () => {
  try {
    const value = JSON.parse(
      (await AsyncStorage.getItem('params')) || 'no data!',
    );
    if (value === null) {
      return null;
    }
    console.log(value);
    return value;
  } catch (error) {
    console.log('error getSteps !!!', error);
    return false;
  }
};

export { storeSteps, getSteps, storeParams, getParams };
