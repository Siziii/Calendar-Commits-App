import { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import CalendarGrid from "./CalendarGrid";
import fetchCommits from '../utils/fetchCommits';

const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(DateTime.local());

    const [commitData, setCommitData] = useState([]);
    const [commitRepo, setCommitRepo] = useState(["framer", "motion"]);

    useEffect(() => {
        console.log('Fetching commit data...');
        fetchCommits(commitRepo[0], commitRepo[1])
          .then((data) => setCommitData(data))
          .catch((error) => console.error('Error fetching commits:', error));
      }, []);

    // Event handler to navigate to the previous month
    const handlePrevMonth = () => {
        setCurrentMonth((prevMonth) => prevMonth.minus({ months: 1 }));
    };

    // Event handler to navigate to the next month
    const handleNextMonth = () => {
        setCurrentMonth((prevMonth) => prevMonth.plus({ months: 1 }));
    };

    return (
        <>
            <div className="w-[80%] flex flex-col">
                <div className="w-full flex justify-between mb-2">
                    <h1 className="text-xl font-bold">{currentMonth.toLocaleString({ year: 'numeric', month: 'long' })}</h1>
                    <div>
                        {/*button for next month*/}
                        <button className="w-8 h-8 bg-primary rounded-lg mr-2 hover:bg-accent transition-all" onClick={handlePrevMonth}>{'<'}</button>
                        {/*button for prev month*/}
                        <button className="w-8 h-8 bg-primary rounded-lg hover:bg-accent transition-all" onClick={handleNextMonth}>{'>'}</button>
                    </div>
                </div>
                <div>
                    <CalendarGrid currentMonth={currentMonth} commitData={commitData} commitRepo={commitRepo}/>
                </div>
            </div>
        </>
    );
}

export default Calendar;