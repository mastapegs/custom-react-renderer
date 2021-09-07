import { FC } from "react";
import Background from "../Background";
import data from "./data.json";

const App: FC = () => {
  return (
    <Background>
      <div id="paper" className="bg-white p-4 border rounded shadow-lg">
        <h1 className="text-3xl font-semibold mb-4">{data.h1}</h1>
        <p>
          We are going to render to the DOM using our own implementation of
          ReactDOM.
        </p>
      </div>
    </Background>
  );
};

export default App;
