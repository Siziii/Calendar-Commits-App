import Calendar from "./Calendar"
import RepoInput from "./RepoInput"
import { useState } from "react";

const Main = () => {
    const [commitRepo, setCommitRepo] = useState(["framer", "motion"]);
    return (
        <div className="bg-bg1 h-screen w-screen flex justify-center items-center overflow-y-visible">
            <div className="flex flex-col md:flex-row w-[90%] justify-center py-6 ">
                <RepoInput setCommitRepo={setCommitRepo} />
                <Calendar commitRepo={commitRepo}/>
            </div>
        </div>
    );
}

export default Main;