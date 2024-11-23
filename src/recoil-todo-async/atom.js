import axios from "axios";
import { atomFamily, selectorFamily } from "recoil";

export const atomTodoFamily = atomFamily({
    key: "atomTodoFamily",
    default: selectorFamily({
        key: "todoSelectorFamily",
        get: (id) => async ({get}) => {
            const res = await axios.get(`http://localhost:2000/${id}`);
            return res.data;
        }
    })
})