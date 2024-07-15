import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Calculator from './Calculator';
import Graphing from './Graphing';
import DataCollection from './DataCollection';
import Programmer from './Programmer';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Calculator />} />
                    <Route path="/graphing" element={<Graphing />} />
                    <Route path="/data-collection" element={<DataCollection />} />
                    <Route path="/programmer" element={<Programmer />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;


















// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
