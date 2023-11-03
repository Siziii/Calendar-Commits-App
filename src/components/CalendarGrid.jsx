import Modal from './Modal';
import { useState } from 'react';
import { filterCommitsForDate } from '../utils/filterCommitsForDate';
import GridItemEmpty from './GridItems/GridItemEmpty';
import GridItem from './GridItems/Griditem';
import GridItemCommit from './GridItems/GridItemCommit';


// Constants
const NUM_ROWS = 6;
const NUM_COLS = 7;
const MOBILE_BREAKPOINT = 500;


const CalendarGrid = ({ currentMonth, commitData, commitRepo }) => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const openModal = () => {
        setIsModalVisible(true);
    };


    const closeModal = () => {
        setIsModalVisible(false);
    };

    const isMobile = window.innerWidth < MOBILE_BREAKPOINT;

    // Render the days of the week
    const renderDaysOfWeek = () => {
        const daysOfWeekValues = isMobile
            ? ['M', 'T', 'W', 'R', 'F', 'S', 'U']
            : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

        return daysOfWeekValues.map((day, index) => (
            <div key={index} className="grid-cell bg-accent text-center font-bold rounded p-1">
                {day}
            </div>
        ));
    };


    // Render grid
    const generateGrid = () => {
        const grid = [];
        const firstDay = currentMonth.startOf('month').weekday;
        const daysInMonth = currentMonth.daysInMonth;
        const daysBeforeStart = (firstDay + NUM_ROWS) % NUM_COLS;
    
        for (let row = 0; row < NUM_ROWS; row++) {
            for (let col = 0; col < NUM_COLS; col++) {
                const dayNumber = col + row * NUM_COLS - daysBeforeStart + 1;
                const date = currentMonth.set({ day: dayNumber });
                const commitsForDate = filterCommitsForDate(commitData, date);
    
                if (dayNumber > 0 && dayNumber <= daysInMonth) {
                    if (commitsForDate.length > 0) {
                        grid.push(
                            <GridItemCommit
                                key={col+'-'+row}
                                dayNumber={dayNumber}
                                commitNumber={commitsForDate.length}
                                setSelectedDate={setSelectedDate}
                                openModal={openModal}
                                date={date}
                            />
                        )
                    }
                    else {
                        grid.push(
                            <GridItem
                                key={col+'-'+row}
                                dayNumber={dayNumber}
                            />
                        )
                    }
                }
                else {
                    grid.push(
                        <GridItemEmpty
                            key={col+'-'+row}
                        />
                    )
                }
            }
        }

        return grid;
    }

    return (
        <>
            {isModalVisible && <Modal closeModal={closeModal} commitData={commitData} selectedDate={selectedDate} commitRepo={commitRepo} />}

            <div className="grid grid-cols-7 gap-1">
                {renderDaysOfWeek()}
                {generateGrid()}
            </div>
            
        </>
    );
}

export default CalendarGrid;
