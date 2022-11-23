import GlobalStyle from "./Styles/GlobalStyled";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from "./FirstPage/sign-in";
import SignUp from "./FirstPage/sign-up";
import Home from "./Home/Home";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/Home" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}
