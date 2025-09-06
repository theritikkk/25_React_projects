import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagsGlobalState({ children }) {
    
    const [loading, setLoading] = useState(false);
    const [enabledFlags, setEnabledFlags] = useState({});

    async function fetchFeatureFlags() {
        try {
            setLoading(true);

            // original service call
            const response = await featureFlagsDataServiceCall();
            console.log("Feature flags response:", response);
            setEnabledFlags(response);

        } catch (error) {
            // Safer error handling: log and set fallback
            console.error("Failed to fetch feature flags:", error);
            setEnabledFlags({}); // fallback empty flags
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchFeatureFlags();
    }, []);

    return (
        <FeatureFlagsContext.Provider value={{ loading, enabledFlags }}>
            {children}
        </FeatureFlagsContext.Provider>
    );
}
