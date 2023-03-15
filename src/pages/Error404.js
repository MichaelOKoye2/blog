import { useNavigate } from "react-router-dom";

const Error404 = () => {
    const navigate = useNavigate()

    return (
        <main>
            <p>Oops! Page Not Found</p>
            <button onClick={() => navigate('/')}>Back to Homepage</button>
        </main>
    );
}

export default Error404