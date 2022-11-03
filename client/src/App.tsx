import { Routes, Route } from "react-router-dom";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import styled from "styled-components";

const AppContainer = styled.div`
  max-width: 1600px;
  margin: auto;
  padding: 0 1rem;
`;
function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
