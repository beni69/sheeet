import { addSeconds, format } from "date-fns";

type Entry = {
    name: string,
    score: number,
    time: number,
}
type DB = Entry[];

const DB_NAME = "leaderboard"

const sortFn =
    (a: Entry, b: Entry) => a.score !== b.score ? b.score - a.score : a.time - b.time;

export const listScores = () => {
    const db = JSON.parse(localStorage.getItem(DB_NAME) || "[]") as DB;
    return db.toSorted(sortFn)
}

export const saveScore = (entry: Entry) => {
    const db = listScores();
    db.push(entry);
    localStorage.setItem(DB_NAME, JSON.stringify(db.toSorted(sortFn)));
}

export const clearScores = () => localStorage.removeItem(DB_NAME);

export const fmtTimer = (timer: number) => {
    const d = addSeconds(new Date(0), timer);
    return format(d, "mm:ss");
};
