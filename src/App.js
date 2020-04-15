import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import PopularFilmsContainer from './Components/Movies/PopularFilmsContainer';
import DetailMovieContainer from './Components/Movies/DetailMovie/DetailMovieContainer';
import { Route, withRouter, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import RecommendationContainer from './Components/Recommendation/RecommendationContainer';



function App(props) {
  if(props.location.pathname === "/"){
    return <Redirect to ='/popular/1'/>
  }
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Route exact path='/popular/:page?' render={() => <PopularFilmsContainer />} />

      </div>
      <Route exact path='/detail/:filmId?/page/:page?' render={() => <DetailMovieContainer />} />
      <Route exact path='/detail/:filmId?/page/:page?' render={() => <RecommendationContainer />} />
    </div>
  );
}

export default compose(withRouter)(App)
