import { useContext } from "react";
import { LoginContext } from "./App";

const Child = () => {
  const userName = useContext(LoginContext);
  console.log(userName);
  return (
    <>
      <div>Hiii {userName}</div>
    </>
  );
};
export default Child;
