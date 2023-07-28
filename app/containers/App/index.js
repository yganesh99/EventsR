import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import indexRoutes from '../../routes/indexRoutes';
import Header from '../../components/Header';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  min-width: 100%;
  margin: 0 auto;
  display: flex;
  min-height: 100vh;
  padding: 0px;
  flex-direction: column;
  background-color: #F9F9F9;
`;

export default function App() {
  return (
    <Router>
      <AppWrapper>
        <Header /> {/* Add the header component here */}
        <Switch>
          {indexRoutes.map((prop, key) => (
            <Route
              exact
              path={prop.path}
              component={prop.component}
              key={key}
            />
          ))}
        </Switch>
      </AppWrapper>
      <GlobalStyle />
    </Router>
  );
}
