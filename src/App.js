import { useReducer } from "react";
import "./App.css"
import { fetchAPI } from "./BookingsAPI";
import Routing from "./components/Routing";

function App() {

  

  function updateTimes(date) {
    return (
        fetchAPI(date)
    );
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <Routing availableTimes={availableTimes} updateTimes={dispatch}/>
    </>
  );
}

export default App;
