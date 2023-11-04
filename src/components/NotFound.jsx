import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="w-screen h-screen bg-bg1 flex flex-col items-center justify-center p-5">
            <div className="flex flex-col items-center">
                <h1 className="text-[40vw] md:text-[15vw] font-bold text-accent leading-none overflow-hidden">404</h1>
                <h2 className="text-[10vw] md:text-[4vw] font-semibold">NOT FOUND</h2>
                <p className="text-lg opacity-50">The page you're looking for does not exist.</p>
                <Link to="/"className="font-bold mt-2 w-full py-2 bg-primary rounded hover:bg-accent transition-all text-center"> Return</Link>
            </div>
        </div>
    );
};

export default NotFound;
