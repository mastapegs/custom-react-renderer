import { FC } from "react";
import data from "./data.json";

const App: FC = () => {
  return (
    <div id="background" className="bg-gray-50 p-4 min-h-screen">
      <div id="paper" className="bg-white p-4 border rounded shadow-lg">
        <h1 className="text-3xl font-semibold mb-4">{data.h1}</h1>
        <p>
          We are going to render to the DOM using our own implementation of
          ReactDOM.
        </p>
      </div>
    </div>
  );
};

export default App;
