import Calendar from "./components/Calendar"
import RepoInput from "./components/RepoInput"

import { useState } from "react";
function App() {
  const [commitRepo, setCommitRepo] = useState(["framer", "motion"]);

  return (
    <div className="bg-bg1 h-screen w-screen flex justify-center items-center ">
      <div className="flex flex-col md:flex-row w-[90%] justify-center py-6">
        <RepoInput setCommitRepo={setCommitRepo}/>
        <Calendar commitRepo={commitRepo}/>
      </div>
    </div>
  )
}

export default App
