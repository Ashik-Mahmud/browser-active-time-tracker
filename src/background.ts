let activeTime = 0;
let isWindowFocused = false;
let interval: number | null = null;

chrome.runtime.onInstalled.addListener(() => {
    chrome.idle.setDetectionInterval(60); // Check idle status every 60 seconds
});

chrome.windows.onFocusChanged.addListener((windowId) => {
    isWindowFocused = windowId !== chrome.windows.WINDOW_ID_NONE;
    if (isWindowFocused) startTracking();
    else stopTracking();
});

chrome.idle.onStateChanged.addListener((state) => {
    if (state === "active" && isWindowFocused) startTracking();
    else stopTracking();
});

function startTracking() {
    if (interval === null) { // Start if not already running
        interval = setInterval(() => {
            activeTime++;
            chrome.storage.local.set({ activeTime });
        }, 1000) as unknown as number; // Type assertion to `number`
    }
}

function stopTracking() {
    if (interval !== null) {
        clearInterval(interval);
        interval = null;
    }
}
