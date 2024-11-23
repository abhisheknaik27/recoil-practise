import { atom, selector } from "recoil";

export const networkAtom = atom({
    key: "networkAtom",
    default: 104
});

export const jobAtom = atom({
    key: "jobAtom",
    default: 4
});

export const messagingAtom = atom({
    key: "messagingAtom",
    default: 30
});

export const notificationAtom = atom({
    key: "notificationAtom",
    default: 29
});

export const totalNotification = selector({
    key: "totalNotification",
    get: ({get}) => {
        const networkCount = get(networkAtom);
        const jobCount = get(jobAtom);
        const messagingCount = get(messagingAtom);
        const notificationCount = get(notificationAtom);

        return networkCount + jobCount + messagingCount + notificationCount;
    }
})