import axios from "axios";
import { atom, selector } from "recoil";

export const notifications = atom({
    key: "notificationAtom",
    default: selector({
        key: "notificationAtomSelector",
        get: async () => {
            const res = await axios.get('http://localhost:2000/sample');
            return res.data;
        }
    })
});

export const totalNotifications = selector({
    key: "totalNotifications",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + allNotifications.jobs + allNotifications.messages + allNotifications.notifications
    }
})
