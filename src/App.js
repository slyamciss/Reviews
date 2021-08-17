import Review from "./Review";
import "./styles.css";
export default function App() {
  return (
    <main className="App">
      <section className="container">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}
