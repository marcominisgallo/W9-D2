import "./App.css";
import AllTheBooks from "./Components/AllTheBooks";
import MyAlert from "./Components/MyAlert";
import MyFooter from "./Components/MyFooter";
import MyNav from "./Components/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import LibriRomantici from "./assets/books/romance.json";
import BookList from "./Components/BookList";
function App() {
  return (
    <>
      <div className="min-vh-100 d-flex flex-column">
        <header className="bg-success-subtle">
          <MyNav />
          <MyAlert />
        </header>
        <main className="flex-grow-1 bg-success-subtle pb-3">
          {/* <AllTheBooks /> */}
          <BookList list={LibriRomantici} />
        </main>
        <footer className="bg-success">
          <MyFooter />
        </footer>
      </div>
    </>
  );
}

export default App;
