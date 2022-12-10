import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AboutPage from "./components/pages/AboutPage";
import FeedbackPage from "./components/pages/FeedbackPage";

function App() {

  //   const pageHeader = "Page Header";
  //   const objects = [
  //     { id: 1, text: "First component" },
  //     { id: 2, text: "Second component" },
  //     { id: 3, text: "Third component" },
  //   ];

  //   const showComments = true;



  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<FeedbackPage />} />
          <Route path="about" element={<AboutPage />} />
        </Routes>

    </Router>

    // Playground
    // <div className="container">
    //   <h1>{pageHeader}</h1>
    //   <p>
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
    //     consequatur iure asperiores magni atque ut voluptatem enim accusamus
    //     laborum tenetur harum perferendis explicabo repellat sint, natus in
    //     velit cumque consequuntur!
    //   </p>
    //   <hr />
    //   {showComments ? (
    //     <div className="comments">
    //       <h3>My objects ({objects.length})</h3>
    //       <ul>
    //         {objects.map((obj, index) => (
    //           <li key={obj.id}>{obj.text}</li>
    //         ))}
    //       </ul>
    //     </div>
    //   ) : (
    //     <span>Show Objects: No</span>
    //   )}
    // </div>
  );
}

export default App;
