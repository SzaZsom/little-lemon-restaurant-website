import { useReducer } from "react";
import "./App.css"
import Routing from "./components/Routing";

const initialState = {
  availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
}

function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return {
        ...state,
        availableTimes: action.payload.times
      };
    default:
      return state;
  }
}

function initializeTimes() {
  return {
    availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
  };
}

function App() {
  const [state, dispatch] = useReducer(updateTimes, initialState, initializeTimes);

  return (
    <>
      <Routing availableTimes={state.availableTimes} dispatch={dispatch}/>
    </>
  );
}

export default App;
