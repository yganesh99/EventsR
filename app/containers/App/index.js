import React, { useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import indexRoutes from '../../routes/indexRoutes';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectApp from './selectors';
import reducer from './reducer';
// import saga from './saga';

import GlobalStyle from '../../global-styles';
import { setLogin } from './actions';

const AppWrapper = styled.div`
  min-width: 100%;
  margin: 0 auto;
  display: flex;
  min-height: 100vh;
  padding: 0px;
  flex-direction: column;
  background-color: #f9f9f9;
`;

export function App({ onSetLoginSuccess, isLoggedIn }) {
  useInjectReducer({ key: 'app', reducer });
  // useInjectSaga({ key: 'app', saga });

  useEffect(() => {
    // console.log(isLoggedIn);
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const accessToken = localStorage.getItem('accessToken');
    if (isLoggedIn && accessToken) {
      onSetLoginSuccess(true);
    }
  });

  return (
    <Router>
      <AppWrapper>
        <Header isLoggedIn={isLoggedIn} /> {/* Add the header component here */}
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
        <Footer /> {/* Add the footer component here */}
      </AppWrapper>
      <GlobalStyle />
    </Router>
  );
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  app: makeSelectApp(),
  isLoggedIn: state.appReducer.isLoggedIn,
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onSetLoginSuccess: data => {
      dispatch(setLogin(data));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(App);
