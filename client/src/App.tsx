import { Routes, Route } from "react-router-dom";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import styled from "styled-components";
import StartPage from "./components/StartPage/StartPage";
import RequireAuth from "./components/RequireAuth";
import Dashboard from "./components/Dashboard/Dashboard";
import { useLocation } from "react-router-dom";
import Sidebar from "./components/Dashboard/Sidebar/Sidebar";

interface StyleProps {
  location: string;
}
const AppContainer = styled.div<StyleProps>`
  margin: auto;
  display: flex;
  flex-direction: ${({ location }) =>
    location === "/" || location === "/sign-up" || location === "/sign-in"
      ? "column"
      : "row"};
`;
function App() {
  let location = useLocation();
  return (
    <>
      <AppContainer location={location.pathname}>
        <div>
          {location.pathname === "/" ||
          location.pathname === "/sign-up" ||
          location.pathname === "/sign-in" ? null : (
            <Sidebar />
          )}
        </div>
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
