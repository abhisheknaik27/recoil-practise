import React from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import { notifications, totalNotifications } from "./atom";

const App = () => {
  return (
    <RecoilRoot>
      <ThemeBar />
    </RecoilRoot>
  );
};

const ThemeBar = () => {
  const notificationCount = useRecoilValue(notifications);
  const totalNotificationCount = useRecoilValue(totalNotifications);

  return (
    <div>
      <button>Home</button>
      <button>Network {notificationCount.network}</button>
      <button>Jobs {notificationCount.jobs}</button>
      <button>Messages {notificationCount.messages}</button>
      <button>Notifications {notificationCount.notifications}</button>
      <button>Me {totalNotificationCount}</button>
    </div>
  );
};

export default App;
