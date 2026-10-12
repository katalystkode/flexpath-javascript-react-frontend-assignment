import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="text-center mt-5 py-5">
            <h1 className="display-4 text-danger fw-bold">404</h1>
            <h2 className="mb-3">Page Not Found</h2>
            <p className="text-secondary mb-4">
                The page you are looking for does not exist or has been moved.
            </p>
            <Link to="/" className="btn btn-danger">Return to Home</Link>
        </div>
    );
}