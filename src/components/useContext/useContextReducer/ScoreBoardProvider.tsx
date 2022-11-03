import { createContext, useContext, useReducer, ReactNode } from "react";

type TActions = {
  type:
    | "HOME_ONE_POINT"
    | "HOME_TWO_POINT"
    | "HOME_THREE_POINT"
    | "VISITING_ONE_POINT"
    | "VISITING_TWO_POINT"
    | "VISITING_THREE_POINT";
};

export interface IScoreBoard {
  home: number;
  visiting: number;
  dispatch: React.Dispatch<TActions>;
}

const ScoreBoardContext = createContext<IScoreBoard | null>(null);
export function useScoreContext() {
  return useContext(ScoreBoardContext);
}

const initialState = {
  home: 0,
  visiting: 0,
};

function scoreBoardReducer(state: typeof initialState, action: TActions) {
  switch (action.type) {
    case "HOME_ONE_POINT":
      return { ...state, home: state.home + 1 };
    case "HOME_TWO_POINT":
      return { ...state, home: state.home + 2 };
    case "HOME_THREE_POINT":
      return { ...state, home: state.home + 3 };
    case "VISITING_ONE_POINT":
      return { ...state, visiting: state.visiting + 1 };
    case "VISITING_TWO_POINT":
      return { ...state, visiting: state.visiting + 2 };
    case "VISITING_THREE_POINT":
      return { ...state, visiting: state.visiting + 3 };
    default:
      return state;
  }
}

export function ScoreBoardProvider({ children }: { children: ReactNode }) {
  const [{ home, visiting }, dispatch] = useReducer(
    scoreBoardReducer,
    initialState
  );

  return (
    <ScoreBoardContext.Provider value={{ home, visiting, dispatch }}>
      {children}
    </ScoreBoardContext.Provider>
  );
}
