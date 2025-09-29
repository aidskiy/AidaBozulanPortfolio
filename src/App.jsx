import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/NavBar";
import { Projects } from "./components/Projects/Projects";
import { Tesseract } from "./components/art/Tesseract";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Projects />
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ height: '400px', width: '100%' }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Tesseract size={1} rotationSpeed={0.5} />
      </Canvas>
      {/* <About /> */}
      {/* <Contact /> */}

    </div>
  );
}

export default App;
