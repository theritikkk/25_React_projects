import { useEffect, useState, useCallback } from "react";
import User from "./user";
import './style.css';

export default function GithubProfileFinder() {
    
    const [userName, setUserName] = useState('theritikkk'); // default username
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useCallback ensures fetchGithubUserData has a stable reference for useEffect
    const fetchGithubUserData = useCallback(async () => {
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
    }, [userName]); // dependency: userName

    function handleSubmit() {
        fetchGithubUserData();
    }

    // Fetch default user on mount and whenever userName changes if needed
    useEffect(() => {
        fetchGithubUserData();
    }, [fetchGithubUserData]);

    if (loading) return <h1>Loading data! Please wait...</h1>;
    if (error) return <h1>Error: {error}</h1>;

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
