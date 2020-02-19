import { StepProps } from '@containers/Steps';

// TODO: https://redux.js.org/recipes/usage-with-typescript

export interface StepListProps {
  stepList: Array<StepProps>;
}

const initialState: StepListProps = {
  stepList: [],
};

const ADD_STEP = 'ADD_STEP';
const REMOVE_STEP = 'REMOVE_STEP';
const DELETE_STEP = 'DELETE_STEP';

interface AddStep {
  type: typeof ADD_STEP;
  payload: StepProps;
}
interface RemoveStep {
  type: typeof REMOVE_STEP;
  payload: StepProps;
}
interface DeleteStep {
  type: typeof DELETE_STEP;
  payload: StepProps;
}

type StepTypes = AddStep | RemoveStep | DeleteStep;

const stepsReducer = (
  state = initialState,
  { type, payload }: StepTypes,
): StepListProps => {
  switch (type) {
    case ADD_STEP:
      return {
        stepList: [...state.stepList, payload],
      };
    default:
      return state;
  }
};

export { stepsReducer };
