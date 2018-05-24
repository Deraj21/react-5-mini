const initialState = {
  currentValue: 0,
  previousValues: [],
  futureValues: []
};

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const UNDO = "UNDO";
const REDO = "REDO";

export default function counter( state = initialState, action ) {
  switch ( action.type ) {
    case INCREMENT:
      return {
        currentValue: state.currentValue + action.amount,
        previousValues: [...state.previousValues, state.currentValue],
        futureValues: state.futureValues
      };
    case DECREMENT:
      return {
        currentValue: state.currentValue - action.amount,
        previousValues: [...state.previousValues, state.currentValue],
        futureValues: state.futureValues
      };
    case UNDO:
      let valid = (state.previousValues.length !== 0);
      return {
        currentValue: valid ? state.previousValues.pop() : state.currentValue,
        previousValues: state.previousValues,
        futureValues: valid ? [...state.futureValues, state.currentValue] : state.futureValues
      };
    case REDO:
      let okay = (state.futureValues.length !== 0);
      return {
        currentValue: okay ? state.futureValues.pop() : state.currentValue,
        previousValues: okay ? [...state.previousValues, state.currentValue] : state.previousValues,
        futureValues: state.futureValues
      };
    default:
      return state;
  }
}

export function increment( amount ) {
  return { amount, type: INCREMENT };
}

export function decrement( amount ) {
  return { amount, type: DECREMENT };
}

export function undo() {
  return { type: UNDO };
}

export function redo() {
  return { type: REDO };
}

/**
 * 
 */