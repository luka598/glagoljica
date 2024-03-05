import { Link } from "react-router-dom";

function Error() {
    return (
        <div className="min-h-screen max-w-screen bg-background">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-5xl text-danger "> Error </h1>
                <Link to={"/"} className="text-primary">Home</Link>
            </div>
        </div>
    );
}

export default Error;