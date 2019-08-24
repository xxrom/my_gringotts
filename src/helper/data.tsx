import AsyncStorage from '@react-native-community/async-storage';
import { StepProps } from '@containers/Steps';

const storeSteps = async (
  steps: Array<StepProps>,
): Promise<Array<StepProps>> => {
  try {
    await AsyncStorage.setItem('steps', JSON.stringify(steps));
    console.log('dataStored inside  !!!');
    return steps;
  } catch (error) {
    console.error('error storeData !!!', error);
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
    console.error('error retrieveData !!!', error);
    return false;
  }
};

export { storeSteps, getSteps };
