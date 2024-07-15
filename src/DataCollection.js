// src/components/DataCollection.js

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DataCollection.css';

const DataCollection = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div className="data-collection">
            <h1>Data Collection Component</h1>
            <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                className="date-picker"
            />
            <p>Selected Date: {selectedDate.toDateString()}</p>
        </div>
    );
};

export default DataCollection;


// // src/components/DataCollection.js

// import React from 'react';
// import datacollection from './data collection/DataCollection.jpg'
// import celender from './celender/8.png'
// const DataCollection = () => {
//     return (
//         <div className="data collectin">
//             <h1>data collectin componentst</h1>
//             <img src={celender} alt="Graph" className="graph-image" width={500} height={400}/>
//             <img src={datacollection} alt="Graph" className="graph-image" width={500} height={400}/>
//         </div>
// //     return <div>Data Collection Component</div>;
//     )
// };

// export default DataCollection;
