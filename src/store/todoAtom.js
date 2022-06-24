import { atom } from "recoil";

const todoAtom = atom({
    key: 'todo-apps',
    default: []
})

export default todoAtom;