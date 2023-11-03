import commitSvg from './../../assets/commit.svg'
import commitSvg_white from './../../assets/commit_white.svg'

const GridItemCommit = ({dayNumber, commitNumber, setSelectedDate, openModal, date}) => {
    return (
        <div
            className="bg-[#138484] rounded aspect-square cursor-pointer group"
            onClick={() => { setSelectedDate(date); openModal(); }}
        >
            <div className='w-full bg-accent rounded-t flex justify-center sm:justify-end items-center h-full sm:h-2/5 lg:h-1/3'>
                <span className='sm:mr-2 text-sm font-semibold'> {dayNumber} </span>
            </div>
            <div className='hidden sm:flex items-center justify-center relative h-3/5 lg:h-2/3 w-full'>
                <div className='absolute opacity-100 group-hover:opacity-0 transition-all flex items-center justify-center'>
                    <img src={commitSvg} alt="commit svg" className='w-[60%]' />
                </div>
                <div className='opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0'>
                    <span className='font-bold text-xl flex items-center'>{commitNumber} <img src={commitSvg_white} alt="commit svg" className='h-[1.25rem] ml-1' /></span>
                </div>
            </div>
        </div>
    );
}

export default GridItemCommit;