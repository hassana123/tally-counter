import "./App.css";
import { Routes, Route } from "react-router-dom";
import TestErrorBoudary from "./components/TestErrorBoudary";
import NoMatch from "./components/NoMatch";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import TallyCounter from "./components/TallyCounter";
import About from "./components/About";
import { ErrorBoundary } from "react-error-boundary";
import DetectError from "./components/DetectError";

function App() {
  return (
    <>
      <ErrorBoundary FallbackComponent={DetectError}>
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="tally" element={<TallyCounter />} />
          <Route path="about" element={<About />} />
          <Route path="testError" element={<TestErrorBoudary />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;
