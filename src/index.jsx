import React, { useCallback, useEffect } from "react";

function QuickShortcut({ hotkey, action }) {
  const handleShortcuts = useCallback(
    (event) => {
      if (hotkey === event.key) {
        event.preventDefault();
        action();
      }
    },
    [action, hotkey]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleShortcuts, false);
    return () => {
      document.removeEventListener("keydown", handleShortcuts, false);
    };
  }, [handleShortcuts]);

  return <></>;
}

export default React.memo(QuickShortcut);
