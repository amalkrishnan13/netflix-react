import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
       
      </header>
      <Banner fetchUrl={requests.fetchNetflixOriginals}></Banner>


      <Row isLargeRow={true} title="Trending" fetchUrl={requests.fetchTrending}></Row>
      <Row title="NetFlix Originals" fetchUrl={requests. fetchNetflixOriginals}></Row>
      <Row title="TopRated" fetchUrl={requests. fetchTopRated}></Row>
      <Row title="ActionMovies" fetchUrl={requests.  fetchActionMovies}></Row>
      <Row title="ComedyMovies" fetchUrl={requests. fetchComedyMovies}></Row>
      <Row title="HorrorMovies" fetchUrl={requests. fetchHorrorMovies}></Row>
      <Row title="RomanceMovies" fetchUrl={requests. fetchRomanceMovies}></Row>
      <Row title="Documentaries" fetchUrl={requests.  fetchDocumentaries}></Row>

    </div>
  );
}

export default App;
