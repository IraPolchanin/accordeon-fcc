import { createContext, useContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "./data";

const FeatureFlagContext = createContext(null);

export const FeatureFlagGlobalState = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});

  const fetchFeatureFlags = async () => {
    setLoading(true);
    try {
      const resp = await featureFlagsDataServiceCall();
      setEnabledFlags(resp);
    } catch (error) {
      throw new Error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  return <FeatureFlagContext.Provider value={{ loading, enabledFlags }}>
    {children}
  </FeatureFlagContext.Provider>
}

export const useFeatureFlag = () => useContext(FeatureFlagContext);