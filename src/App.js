import GlobalStyle from "./Styles/GlobalStyled";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from "./FirstPage/sign-in";
import SignUp from "./FirstPage/sign-up";
import Home from "./Home/Home";
import AuthProvider from "./Context/Auth";
import ProductPage from "./Home/ProductPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <AuthProvider>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Product/:id" element={<ProductPage />}/>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}
