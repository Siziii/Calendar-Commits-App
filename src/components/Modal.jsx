import ComitContainer from "./ComitContainer";

const Modal = ({closeModal}) => {
    return (
        <div className="absolute z-10 w-screen h-screen bg-modal flex justify-center items-center">
            <div className="w-[70%] bg-bg1 relative">

                <div className="w-full flex items-center justify-between bg-primary">
                    <h1 className="pl-4">Comits for some date</h1>
                    <button className="w-12 h-12" onClick={closeModal}>x</button>
                </div>

                <div className="w-full p-8 h-[30rem] overflow-y-auto pb-24 custom-scrollbar">
                    <ComitContainer authorName={"John"} authorEmail={"Example@gmail"} commitTime={"22/2/2000 22h22min"} commitMessage={"Test message"} commitSHA={"7a439d8efb4c3f563c88c7a5e20b97711eab96b3"}/>
                    <ComitContainer authorName={"John"} authorEmail={"Example@gmail"} commitTime={"22/2/2000 22h22min"} commitMessage={"Test message"} commitSHA={"7a439d8efb4c3f563c88c7a5e20b97711eab96b3"}/>
                    <ComitContainer authorName={"John"} authorEmail={"Example@gmail"} commitTime={"22/2/2000 22h22min"} commitMessage={"Test message"} commitSHA={"7a439d8efb4c3f563c88c7a5e20b97711eab96b3"}/>
                    <ComitContainer authorName={"John"} authorEmail={"Example@gmail"} commitTime={"22/2/2000 22h22min"} commitMessage={"Test message"} commitSHA={"7a439d8efb4c3f563c88c7a5e20b97711eab96b3"}/>
                </div>
                <div className='pointer-events-none absolute z-20 h-20 -translate-y-20 w-[calc(100%-16px)] bg-gradient-to-t from-bg1 to-transparent'/>
            </div>
        </div>
    );
}

export default Modal;