import { useEffect, useState } from "react";

const View = () => {
  const [activeTime, setActiveTime] = useState(0);

  useEffect(() => {
    const updateActiveTime = () => {
      chrome.storage.local.get(["activeTime"], (result) => {
        setActiveTime(result.activeTime || 0);
      });
    };

    // Fetch time initially and set up a listener for changes
    updateActiveTime();
    chrome.storage.onChanged.addListener(updateActiveTime);

    return () => chrome.storage.onChanged.removeListener(updateActiveTime);
  }, []);

  const hours = Math.floor(activeTime / 3600);
  const minutes = Math.floor((activeTime % 3600) / 60);
  const seconds = activeTime % 60;
  return (
    <div>
      <p className="text-lg text-center">
        {hours} hours, {minutes} minutes, {seconds} seconds
      </p>
    </div>
  );
};

export default View;
