import styled from 'styled-components';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './pages/HomePage';
import AddWordPage from './pages/AddWordPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Topbar from './components/Topbar';
import MainPage from './pages/MainPage';

const StyledWrapper = styled.div`
  
`;

function App() {

  return (
    <StyledWrapper>

      <Switch>

        <Route path="/register">
          <RegisterPage />
        </Route>

        <Route path="/login">
          <LoginPage />
        </Route>

        <Route path='/'>
          <MainPage />
        </Route>

      </Switch>

    </StyledWrapper>
  );
}

export default App;
