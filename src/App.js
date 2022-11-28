import GlobalStyle from "./Styles/GlobalStyled";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from "./FirstPage/sign-in";
import SignUp from "./FirstPage/sign-up";
import Home from "./Home/Home";
import AuthProvider from "./Context/Auth";
import ProductPage from "./Home/ProductPage";
import CheckoutPage from "./Checkout/checkoutPage";
import LastPage from "./FinalPage/LastPage";

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
            <Route path="/Checkout" element={<CheckoutPage />}/>
            <Route path="/ThanksPage" element={<LastPage />}/>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}
