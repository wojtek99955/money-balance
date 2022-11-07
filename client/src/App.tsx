import { Routes, Route } from "react-router-dom";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import styled from "styled-components";
import StartPage from "./components/StartPage/StartPage";
import RequireAuth from "./components/RequireAuth";
import Dashboard from "./components/Dashboard/Dashboard";

const AppContainer = styled.div`
  max-width: 1600px;
  margin: auto;
`;
function App() {
  return (
    <>
      <AppContainer>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
        </Routes>
      </AppContainer>
    </>
  );
}

export default App;
