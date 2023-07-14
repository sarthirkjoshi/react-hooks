import "./styles.css";
import Parent from "./Parent";
import { createContext, useState } from "react";
export const LoginContext = createContext();

export default function App() {
  const [name, setName] = useState("Shaurya");
  return (
    <div className="App">
      <LoginContext.Provider value={name}>
        <Parent />
      </LoginContext.Provider>
    </div>
  );
}
