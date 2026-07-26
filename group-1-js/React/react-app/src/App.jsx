import CitiesCards from "./components/CitiesCards";
import Footer from "./shared/components/footer/Footer";
import Header from "./shared/components/header/Header";

function App() {
  return (
    <>
      <Header heading={1} />
      {/* <Header heading={"app"} /> */}
      <main className="main" style={{ minHeight: "100vh" }}>
        <CitiesCards />
      </main>
      <Footer />
    </>
  );
}

export default App;
