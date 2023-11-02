import ComitContainer from "./ComitContainer";
import { DateTime } from 'luxon';
const Modal = ({closeModal, selectedDate, commitData, commitRepo}) => {

    const filteredCommits = commitData.filter((commit) => {
        const commitDate = DateTime.fromISO(commit.commit.author.date);
        return selectedDate && commitDate.hasSame(selectedDate, 'day');
    });

    return (
        <div className="absolute top-0 left-0 w-screen h-screen bg-modal flex justify-center items-center">
            <div className="w-[70%] bg-bg1 relative">

                <div className="w-full flex items-center justify-between bg-primary">
                    <h1 className="pl-4">Comits for some date</h1>
                    <button className="w-12 h-12" onClick={closeModal}>x</button>
                </div>

                <div className="w-full p-8 h-[36rem] overflow-y-auto pb-24 custom-scrollbar">
                    {filteredCommits.map((commit, index) => (
                        <ComitContainer
                            key={index}
                            authorName={commit.commit.author.name}
                            authorEmail={commit.commit.author.email}
                            commitTime={DateTime.fromISO(commit.commit.author.date).toLocaleString(DateTime.DATETIME_MED)}
                            commitMessage={commit.commit.message}
                            commitSHA={commit.sha}
                            commitRepo = {commitRepo}
                        />
                    ))}
                </div>
                <div className='pointer-events-none absolute z-20 h-20 -translate-y-20 w-[calc(100%-16px)] bg-gradient-to-t from-bg1 to-transparent'/>
            </div>
        </div>
    );
}

export default Modal;