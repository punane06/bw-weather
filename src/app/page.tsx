import Header from "./components/Header";
import SearchBox from "./components/SearchBox";

export default function Home() {
  const APY_KEY = 'WEATHERMAP_API_KEY';
  const city = 'Tallinn'
  return (
    <main className="main">
      <Header />
      <div className="bg-upper">
        <div className="d-flex justify-content-center pt-175">
          <SearchBox city={city} />
        </div>

      </div>
    </main>
  );
}
