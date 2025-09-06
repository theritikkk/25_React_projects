import { useEffect, useState } from "react";
import User from "./user";
import './style.css';

export default function GithubProfileFinder() {
    
    const [userName, setUserName] = useState('theritikkk'); // default username
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // added for error handling

    async function fetchGithubUserData() {
        try {
            setLoading(true);
            setError(null);

            const res = await fetch(`https://api.github.com/users/${userName}`);
            
            if (!res.ok) {
                throw new Error("User not found or API error");
            }

            const data = await res.json();
            setUserData(data);
        } catch (err) {
            console.error(err);
            setError(err.message);
            setUserData(null);
        } finally {
            setLoading(false);
        }
    }

    function handleSubmit() {
        fetchGithubUserData();
    }

    useEffect(() => {
        fetchGithubUserData();
    }, []); // fetch default user on mount

    if (loading) {
        return <h1>Loading data! Please wait...</h1>;
    }

    if (error) {
        return <h1>Error: {error}</h1>;
    }

    return (
        <div className="github-profile-container">

            <div className="input-wrapper">
                <input 
                    name="search-by-username"
                    type="text"
                    placeholder="Search Github Username..."
                    value={userName}
                    onChange={(event) => setUserName(event.target.value)}
                />
                <button onClick={handleSubmit}>Search</button>
            </div>

            {userData && <User user={userData} />}
        </div>
    );
}
