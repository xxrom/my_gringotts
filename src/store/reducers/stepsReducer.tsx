// TODO: https://redux.js.org/recipes/usage-with-typescript

const initialState: StateProps = {
  messages: [],
};

const SEND_MESSAGE = 'SEND_MESSAGE';
const DELETE_MESSAGE = 'DELETE_MESSAGE';

interface SendMessageAction {
  type: typeof SEND_MESSAGE;
  payload: Message;
}

type ChatActionTypes = SendMessageAction | DeleteMessageAction;

const stepsReducer = (
  state = initialState,
  action: ChatActionTypes,
): StateProps => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
};

export { stepsReducer };
