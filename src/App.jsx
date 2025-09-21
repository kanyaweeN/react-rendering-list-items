import "./App.css";
import MovieList from "./component/movieList";
import TeamList from "./component/TeamList";

function App() {
  return (
    <div className="App">
      <div className="p-6 bg-gray-100 flex items-center justify-center flex-col">
        <div className="flex items-center justify-center">
          <h1 className="font-semibold text-3xl p-6">Movie List Section</h1>
        </div>
        <section className="movie-list-section">
          <MovieList />
        </section>
      </div>
      <div className="p-6 bg-gray-100 flex items-center justify-center flex-col">
        <div className="flex items-center justify-center">
          <h1 className="font-semibold text-3xl p-6">Team List Section</h1>
        </div>
        <section className="movie-list-section">
          <TeamList />
        </section>
      </div>
    </div>
  );
}

export default App;
