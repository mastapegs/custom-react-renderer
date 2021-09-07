import { FC } from "react";

const Paper: FC = ({ children }) => (
  <div
    id="paper"
    className="bg-white p-4 border rounded shadow-lg max-w-screen-sm mx-auto"
  >
    {children}
  </div>
);

export default Paper;
