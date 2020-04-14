import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import PopularFilmsContainer from './Components/Movies/PopularFilmsContainer';
import DetailMovieContainer from './Components/Movies/DetailMovie/DetailMovieContainer';
import { Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';



function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Route exact path='/' render={() => <PopularFilmsContainer />} />

      </div>
      <Route exact path='/detail/:filmId?' render={() => <DetailMovieContainer />} />
    </div>
  );
}

export default compose(withRouter)(App)
