import { useState, useEffect } from "react";

const useDelayedLoader = (loading, delay = 500) => {
  const [showLoader, setShowLoader] = useState(false);
  const [loadingState, setLoadingState] = useState(loading);

  useEffect(() => {
    let timer;
    if (loading) {
      setShowLoader(true);
      setLoadingState(true);
      timer = setTimeout(() => {
        if (loadingState) {
          setShowLoader(false);
        }
      }, delay);
    } else {
      setLoadingState(false);
      setShowLoader(false);
    }
    return () => clearTimeout(timer);
  }, [loading, delay, loadingState]);

  return showLoader;
};

export default useDelayedLoader;
