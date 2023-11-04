import { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import CalendarGrid from "./CalendarGrid";
import fetchCommits from '../utils/fetchCommits';
import {CaretLeftFill, CaretRightFill} from 'react-bootstrap-icons';
import { useParams, Navigate } from "react-router-dom";

const Calendar = ({ commitRepo }) => {
    const { date } = useParams();

    if (date && !DateTime.fromISO(date).isValid) {
        return <Navigate to="/404" />;
    }

    const [currentMonth, setCurrentMonth] = useState(date ? DateTime.fromISO(date) : DateTime.local());
    const [commitData, setCommitData] = useState([]);

    useEffect(() => {
        console.log('Fetching commit data from', commitRepo[0], commitRepo[1]);
        fetchCommits(commitRepo[0], commitRepo[1])
            .then((data) => setCommitData(data))
            .catch((error) => console.error('Error fetching commits:', error));
    }, [commitRepo]);

    // Event handler to navigate to the previous month
    const handlePrevMonth = () => {
        setCurrentMonth((prevMonth) => prevMonth.minus({ months: 1 }));
    };

    // Event handler to navigate to the next month
    const handleNextMonth = () => {
        setCurrentMonth((prevMonth) => prevMonth.plus({ months: 1 }));
    };

    return (
        <div className="w-full max-w-2xl flex flex-col">
            <div className='bg-secondary rounded p-4'>
                <div className="w-full flex justify-between mb-4">
                    <h1 className="text-xl font-bold">{currentMonth.toLocaleString({ year: 'numeric', month: 'short' })}</h1>
                    <div className='flex'>
                        {/*button for next month*/}
                        <button className="w-8 h-8 bg-primary rounded mr-1 hover:bg-accent transition-all flex items-center justify-center" onClick={handlePrevMonth}> <CaretLeftFill/> </button>
                        {/*button for prev month*/}
                        <button className="w-8 h-8 bg-primary rounded hover:bg-accent transition-all flex items-center justify-center" onClick={handleNextMonth}> <CaretRightFill/> </button>
                    </div>
                </div>
                
                <div>
                    <CalendarGrid currentMonth={currentMonth} commitData={commitData} commitRepo={commitRepo} />
                </div>
            </div>
        </div>
    );
}

export default Calendar;