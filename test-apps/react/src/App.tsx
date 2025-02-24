import "./App.css";
//import { Button } from "../../../dist/react/Button.js";
import { Button } from "md-math-field";

function App() {
  return (
    <>
      <h1>Button:</h1>
      <Button text="hi" onClick={() => alert("hi")} />
    </>
  );
}

export default App;
