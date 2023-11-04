import { useState } from "react";

const RepoInput = ({ setCommitRepo }) => {

    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setCommitRepo([input1, input2]);
    };
    return (
        <div className="w-full md:w-1/3 bg-secondary p-4 rounded mb-4 md:mb-0 sm:mr-4">

            <form onSubmit={handleSubmit} className="flex flex-col w-full gap-2">

                <div className="flex flex-col w-full">
                    <span className="ml-1 mb-1 opacity-50 text-sm font-semibold">Author name</span>
                    <input
                        className="bg-primary h-10 px-4 outline-none rounded focus:brightness-110"
                        type="text"
                        value={input1}
                        onChange={(e) => setInput1(e.target.value)}
                        placeholder="Enter author name..."
                    />
                </div>

                <div className="flex flex-col w-full">
                    <span className="ml-1 mb-1 opacity-50 text-sm font-semibold">Repository name</span>
                    <input
                        className="bg-primary h-10 px-4 outline-none rounded focus:brightness-110"
                        type="text"
                        value={input2}
                        onChange={(e) => setInput2(e.target.value)}
                        placeholder="Enter repo name..."
                    />
                </div>
                <div className="flex flex-col w-full">
                    <span className="ml-1 mb-1 opacity-50 text-sm font-semibold">Fetch commits</span>
                    <button
                        type="submit"
                        className="bg-primary w-full hover:bg-accent h-10 rounded transition-all"
                    >
                        FETCH
                    </button>
                </div>
            </form>
        </div>
    );
}

export default RepoInput;