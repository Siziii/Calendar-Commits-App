import { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import CalendarGrid from "./CalendarGrid";
import fetchCommits from '../utils/fetchCommits';
import { CaretLeftFill, CaretRightFill } from 'react-bootstrap-icons';
import { useParams, Navigate } from "react-router-dom";
import repoSvg from './../assets/repo.svg'
const Calendar = ({ commitRepo }) => {
    const { date } = useParams();

    if (date && !DateTime.fromISO(date).isValid) {
        return <Navigate to="/404" />;
    }

    const [currentMonth, setCurrentMonth] = useState(date ? DateTime.fromISO(date) : DateTime.local());
    const [commitData, setCommitData] = useState([]);
    const [isRepoValid, setIsRepoValid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Fetch Data
    const fetchData = async () => {
        console.log('Fetching commit data from', commitRepo[0], commitRepo[1]);
        setIsLoading(true);

        try {
            const data = await fetchCommits(commitRepo[0], commitRepo[1]);
            setCommitData(data);
            setIsRepoValid(true);
        } catch (error) {
            setCommitData([]);
            setIsRepoValid(false);
            console.error('Error fetching commits:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
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

                {/*current repo display*/}
                <div className='flex flex-row items-center mb-1'>
                    <img src={repoSvg} alt="repo svg" className='w-6' />
                    <span className='sm:text-lg ml-2 opacity-50 font-semibold'>
                        {isLoading ? 'Fetching commits...' : isRepoValid ? `${commitRepo[0]}/${commitRepo[1]}` : 'Repository not found!'}
                    </span>
                </div>

                <div className="w-full flex justify-between mb-4">
                    <h1 className="text-xl font-bold">{currentMonth.toLocaleString({ year: 'numeric', month: 'short' })}</h1>
                    <div className='flex'>
                        {/*button for next month*/}
                        <button className="w-8 h-8 bg-primary rounded mr-1 hover:bg-accent transition-all flex items-center justify-center" onClick={handlePrevMonth}> <CaretLeftFill /> </button>
                        {/*button for prev month*/}
                        <button className="w-8 h-8 bg-primary rounded hover:bg-accent transition-all flex items-center justify-center" onClick={handleNextMonth}> <CaretRightFill /> </button>
                    </div>
                </div>


                    <CalendarGrid currentMonth={currentMonth} commitData={commitData} commitRepo={commitRepo} />

            </div>
        </div >
    );
}

export default Calendar;