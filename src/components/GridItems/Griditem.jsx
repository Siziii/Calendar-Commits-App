const GridItem = ({dayNumber}) => {
    return (
        <div className="bg-primary aspect-square rounded">
            <div className='w-full h-full sm:h-2/5 lg:h-1/3 bg-[#404040] rounded-t flex justify-center sm:justify-end items-center'>
                <span className='sm:mr-2 text-sm font-semibold'> {dayNumber} </span>
            </div>
        </div>
    );
}

export default GridItem;