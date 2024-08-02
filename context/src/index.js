import { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

export const UserContext = createContext(null);
function Component() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={{user, setUser}}>
      <App />
    </UserContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Component />);
