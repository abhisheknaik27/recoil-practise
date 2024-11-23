import React, { useMemo } from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import {
  jobAtom,
  messagingAtom,
  networkAtom,
  notificationAtom,
  totalNotification,
} from "./atom";

const App = () => {
  return (
    <RecoilRoot>
      <ThemeBar />
    </RecoilRoot>
  );
};

const ThemeBar = () => {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobNotificationCount = useRecoilValue(jobAtom);
  const messagingNotificationCount = useRecoilValue(messagingAtom);
  const notificationCount = useRecoilValue(notificationAtom);

  const totalNotificationCount = useRecoilValue(totalNotification);
  
  //USEMEMO HOOK ->
  //   const totalNotificationCount = useMemo(() => {
  //     return (
  //       networkNotificationCount +
  //       jobNotificationCount +
  //       messagingNotificationCount +
  //       notificationCount
  //     );
  //   }, [
  //     networkNotificationCount,
  //     jobNotificationCount,
  //     messagingNotificationCount,
  //     notificationCount,
  //   ]);
  return (
    <div>
      <button>Home</button>
      <button>Network {networkNotificationCount}</button>
      <button>Jobs {jobNotificationCount}</button>
      <button>Messages {messagingNotificationCount}</button>
      <button>Notifications {notificationCount}</button>
      <button>Me {totalNotificationCount}</button>
    </div>
  );
};
export default App;
