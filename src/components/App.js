import { useState } from "react";
import { authService } from "../fbase";
import RouterBase from "./Router";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <RouterBase isLoggedIn={isLoggedIn}></RouterBase>
      <footer>&copy; Nwitter {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
