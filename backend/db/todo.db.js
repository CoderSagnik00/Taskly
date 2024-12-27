import { ObjectId } from "mongodb";
import { client } from "../config/db.js";

const db = client.db('Taskly');
const todo = db.collection('todo');

export const createTask = async ({ title, desc }) => {
    const data = { "title": title, "desc": desc }
    try {
        const result = await todo.insertOne(data);
        return result.insertedId;

    } catch (err) {
        console.error(err);

    }

}

export const readTask = async (id) => {
    try {

        let data;
        if (id) {
            data = await todo.findOne({ _id: id });
        } else {
            data = await todo.find({}).toArray();

        }
        return data;

    } catch (err) {
        console.error(err);
    }
}

export const delTask = async (id) => {
    try {
        const data = await todo.deleteOne({ _id: new ObjectId(id) })

        return data.deletedCount;
    } catch (err) {
        console.log(err);

    }
}