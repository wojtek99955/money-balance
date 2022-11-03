import { Routes, Route } from "react-router-dom";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import styled from "styled-components";
import StartPage from "./components/StartPage";
import Header from "./components/Header/Header";

const AppContainer = styled.div`
  max-width: 1600px;
  margin: auto;
`;
function App() {
  return (
    <>
      <Header />
      <AppContainer>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </AppContainer>
    </>
  );
}

export default App;
