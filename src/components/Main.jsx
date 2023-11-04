import Calendar from "./Calendar"
import RepoInput from "./RepoInput"
import { useState } from "react";

const Main = () => {
    const [commitRepo, setCommitRepo] = useState(["Siziii", "Calendar-Commits-App"]);
    return (
        <div className="bg-bg1 min-h-screen w-screen flex justify-center items-center">
            <div className="flex flex-col md:flex-row w-[90%] justify-center py-4">
                <RepoInput setCommitRepo={setCommitRepo} />
                <Calendar commitRepo={commitRepo}/>
            </div>
        </div>
    );
}

export default Main;