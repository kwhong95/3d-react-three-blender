import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { render } from "react-dom";

const App = () => {
  return (
    <div id="canvas-container">
      <Canvas linear dpr={[1, 2]} orthographic>
        <Suspense
          fallback={<Html center className="loading" children="Loading..." />}
        >
          <h1>Hello</h1>
        </Suspense>
      </Canvas>
    </div>
  );
};

render(<App />, document.getElementById("root"));
