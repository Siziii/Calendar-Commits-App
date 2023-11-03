import { Github } from "react-bootstrap-icons";

const ComitContainer = ({authorName, authorEmail, commitTime, commitMessage, commitSHA, commitRepo}) => {

    const openCommitInNewTab = () => {
        const commitURL = `https://github.com/${commitRepo[0]}/${commitRepo[1]}/commit/${commitSHA}`;
        window.open(commitURL, '_blank');
    };
 
    return (
        <div className="bg-[#292929] w-full p-2 mb-4 rounded-md">

            <div className="flex flex-col sm:flex-row gap-2 mb-2">
                <div className="w-full">
                    <span className="ml-1 opacity-50 text-sm font-semibold">AUTHOR NAME</span>
                    <div className="bg-primary py-2 px-3 rounded-md">
                        <span>{authorName}</span>
                    </div>
                </div>
                <div className="w-full">
                    <span className="ml-1 opacity-50 text-sm font-semibold">AUTHOR EMAIL</span>
                    <div className="bg-primary py-2 px-3 rounded-md">
                        <span>{authorEmail}</span>
                    </div>
                </div>
                <div className="w-full">
                    <span className="ml-1 opacity-50 text-sm font-semibold">COMMIT TIME</span>
                    <div className="bg-primary py-2 px-3 rounded-md">
                        <span>{commitTime}</span>
                    </div>
                </div>
            </div>

            <div className="w-full mb-2">
                <span className="ml-1 opacity-50 text-sm font-semibold">COMMIT MESSAGE</span>
                <div className="bg-primary py-2 px-3 rounded-md">
                    <span>{commitMessage}</span>
                </div>
            </div>

            <div className="flex w-full flex-col">
                <span className="ml-1 opacity-50 text-sm font-semibold">SHA</span>
                <div className="flex flex-col sm:flex-row gap-2">
                    <div className="bg-primary py-2 px-3 rounded-md w-full">
                        <span>{commitSHA}</span>
                    </div>
                    <button className="bg-primary w-full sm:w-48 py-2 px-4 rounded-md flex justify-center items-center hover:bg-accent transition-all" onClick={()=>openCommitInNewTab()}> <span className="mr-2">View Code</span> <Github size={20}/> </button>
                </div>
            </div>

        </div>
    );
}

export default ComitContainer;