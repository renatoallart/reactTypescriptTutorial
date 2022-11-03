import { useReducer } from "react";

type TAcationUpdate = { type: "increment" | "decrement"; payload: number };

type TAcationReset = {
  type: "reset";
};

interface ICounterReducer {
  counter: number;
}

const initialState: ICounterReducer = {
  counter: 0,
};

//another way to
// say to typescript the type of the state is the same of typeof  initialState
// function counterReducer(state: typeof initialState, action: TAcation) {
//     switch (action.type) {
//       case "increment":
//         return { counter: state.counter + action.payload };
//       case "decrement":
//         return { counter: state.counter - action.payload };
//       default:
//         return state;
//     }
//   }

// using interface to specify the type of iniTialState
function counterReducer(
  state: ICounterReducer,
  action: TAcationReset | TAcationUpdate
) {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + action?.payload };
    case "decrement":
      return { counter: state.counter - action?.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export function Counter() {
  const [{ counter }, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Down 10
      </button>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Up 10
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset Counter</button>
    </div>
  );
}
