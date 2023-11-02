import { DateTime } from 'luxon';
import Modal from './Modal';
import { useState } from 'react';

const CalendarGrid = ({ currentMonth, commitData,commitRepo }) => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const openModal = () => {
        setIsModalVisible(true);
    };
    
    const closeModal = () => {
        setIsModalVisible(false);
    };

    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    // Store the first day of the current month
    const firstDay = currentMonth.startOf('month').weekday;
    // Store the number of days in the current month
    const daysInMonth = currentMonth.daysInMonth;

    const daysBeforeStart = (firstDay - 1 + 7) % 7;

    commitData.map((commit, index) => {
        const date = commit?.commit?.author?.date;
        console.log(`Date for commit ${index + 1}:`, date);
    });

    const daysInGrid = Array.from({ length: 6 }, (_, weekIndex) => (
        <tr key={weekIndex} className="bg-bg2">
            {daysOfWeek.map((day, dayIndex) => {

                const dayNumber = dayIndex + weekIndex * 7 - daysBeforeStart + 1;
                let date;

                if (dayNumber >= 1 && dayNumber <= daysInMonth) {
                    date = currentMonth.set({ day: dayNumber });
                }

                //set the bgClass based on if date exists
                const bgClass = date ? 'bg-primary' : 'bg-secondary';

                //check if day has any commit data
                const hasCommits = commitData.some((commit) => {
                    const commitDate = DateTime.fromISO(commit.commit.author.date);
                    return date && commitDate.hasSame(date, 'day');
                });

                return (
                    <td key={dayIndex} className={`border border-[#5A5A5A] p-0 ${bgClass} h-24 align-top`}>
                        {date && (
                            <div className='flex flex-col items-end p-3 h-full'>
                                <span className='text-sm '>{date.day}</span>
                                <div className='w-full h-full flex items-center'>
                                    {hasCommits && (
                                        <button className='w-full bg-accent p-2 rounded-md flex' onClick={() =>{setSelectedDate(date); openModal();}}>
                                            See commits
                                        </button>
                                    )}
                                </div>
                            </div>
                        )}
                    </td>
                )
            })}
        </tr>
    ));

    return (<>
        {
            isModalVisible && <Modal closeModal={closeModal} commitData={commitData} selectedDate={selectedDate} commitRepo={commitRepo}/>
        }
        <table className="w-full table-fixed">
            <thead>
                <tr className='bg-accent h-12'>
                    {daysOfWeek.map((day) => (
                        <th key={day} className=''>{day}</th>
                    ))}
                </tr>
            </thead>
            <tbody className='p-4'>{daysInGrid}</tbody>
        </table>
    </>
    )
}

export default CalendarGrid;
