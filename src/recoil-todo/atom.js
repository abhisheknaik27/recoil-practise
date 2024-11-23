import { atomFamily } from "recoil";
import { todos } from "./todos";

export const todoAtomFamily = atomFamily({
    key: "todoAtomFamily",
    default: (id) => {
        return todos.find(t => t.id === id)
    }
})