import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRating
      maxRating={5}
      className="test"
      messages={["terrible", "bad", "okay", "good", "amazing"]}
      defaultRating={3}
    />
    <Test /> */}
    <App />
  </React.StrictMode>
);
