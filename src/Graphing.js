// src/Graphing.js
 import React from 'react';
import images from './images/6.png'

const Graphing = () => {
    return (
        <div className="graphing">
            <h1>Graphing Component</h1>
            <img src={images} alt="Graph" className="graph-image" width={500} height={400}/>
        </div>
// const Graphing = () => {
//     return <div> Graphing Component </div>;

    )
 
};

export default Graphing;



// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
// import './Graphing.css';

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend
// );

// const Graphing = () => {
//     const data = {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [
//             {
//                 label: 'Dataset 1',
//                 data: [65, 59, 80, 81, 56, 55, 40],
//                 borderColor: 'rgba(75,192,192,1)',
//                 backgroundColor: 'rgba(75,192,192,0.2)',
//             },
//             {
//                 label: 'Dataset 2',
//                 data: [28, 48, 40, 19, 86, 27, 90],
//                 borderColor: 'rgba(153,102,255,1)',
//                 backgroundColor: 'rgba(153,102,255,0.2)',
//             }
//         ],
//     };

//     const options = {
//         responsive: true,
//         plugins: {
//             legend: {
//                 position: 'top',
//             },
//             title: {
//                 display: true,
//                 text: 'Chart.js Line Chart',
//             },
//         },
//     };

//     return (
//         <div className="graphing">
//             <h1>Graphing Component</h1>
//             <div className="graph-container">
//                 <Line data={data} options={options} />
//             </div>
//         </div>
//     );
// };

// export default Graphing;






