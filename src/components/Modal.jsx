import { X } from "react-bootstrap-icons";
import ComitContainer from "./ComitContainer";
import { DateTime } from 'luxon';
import { filterCommitsForDate } from '../utils/filterCommitsForDate';

const Modal = ({closeModal, selectedDate, commitData, commitRepo}) => {

    const filteredCommits = filterCommitsForDate(commitData, selectedDate);

    return (
        <div className="absolute z-30 top-0 left-0 w-screen h-screen bg-modal flex justify-center items-center backdrop-blur-sm  ">
            <div className="w-full max-w-2xl h-[100vh] sm:max-h-[80%] bg-secondary relative overflow-y-scroll rounded-l">

                <div className="pointer-events-none fixed z-50 w-full max-w-[calc(42rem-16px)] h-[100vh] sm:max-h-[80%] flex flex-col justify-between ">
                    <div className="flex items-center justify-between bg-primary">
                        <h1 className="pl-4 font-bold text-lg">Commited on {selectedDate.toFormat("d/M/y")}</h1>
                        <button className=" pointer-events-auto w-12 h-12 flex justify-center items-center hover:bg-accent transition-all" onClick={closeModal}><X size={24}/></button>
                    </div>
                    <div className=' h-20  w-[calc(42rem-16px)] bg-gradient-to-t from-secondary to-transparent '/>
                </div>

                <div className="w-full px-4 sm:px-8 py-20 ">
                    {filteredCommits.map((commit, index) => (
                        <ComitContainer
                            key={index}
                            authorName={commit.commit.author.name}
                            authorEmail={commit.commit.author.email}
                            commitTime={DateTime.fromISO(commit.commit.author.date).toFormat("HH' :' mm")}
                            commitMessage={commit.commit.message}
                            commitSHA={commit.sha}
                            commitRepo = {commitRepo}
                        />
                    ))}
                </div>
                
            </div>
        </div>
    );
}


export default Modal;