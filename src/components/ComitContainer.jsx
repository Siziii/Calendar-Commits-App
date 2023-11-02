const ComitContainer = ({authorName, authorEmail, commitTime, commitMessage, commitSHA}) => {
    return (
        <div className="bg-[#292929] w-full p-4 mb-4 rounded-md">

            <div className="flex gap-2 mb-2">
                <div className="w-full">
                    <span>Author name</span>
                    <div className="bg-primary py-2 px-3 rounded-md">
                        <span>{authorName}</span>
                    </div>
                </div>
                <div className="w-full">
                    <span>Author Email</span>
                    <div className="bg-primary py-2 px-3 rounded-md">
                        <span>{authorEmail}</span>
                    </div>
                </div>
                <div className="w-full">
                    <span>Commit time</span>
                    <div className="bg-primary py-2 px-3 rounded-md">
                        <span>{commitTime}</span>
                    </div>
                </div>
            </div>

            <div className="w-full mb-2">
                <span>Commit message</span>
                <div className="bg-primary py-2 px-3 rounded-md">
                    <span>{commitMessage}</span>
                </div>
            </div>

            <div className="flex w-full flex-col">
                <span>SHA</span>
                <div className="flex gap-2">
                    <div className="bg-primary py-2 px-3 rounded-md w-full">
                        <span>{commitSHA}</span>
                    </div>
                    <button className="bg-primary py-2 px-8 rounded-md hover:bg-accent transition-all"> ViewCode</button>
                </div>
            </div>

        </div>
    );
}

export default ComitContainer;