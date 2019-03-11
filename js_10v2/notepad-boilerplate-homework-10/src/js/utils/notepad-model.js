import initialNotes from './notes.json';
const shortid = require('shortid');



export default class Notepad {

    constructor(notes = []) {
        this._notes = notes;
    }

    get notes() {
        return this._notes;
    }

    save(text1, text2) {
        const newItem = {

            id: shortid.generate(),
            title: text1,
            body: text2
        };

        this._notes.push(newItem);

        return newItem;
    }

    delete(id) {
        this._notes = this._notes.filter(note => note.id !== id);
    }


    filter(query = '') {
        return this._notes.filter(
            (note) =>
            note.body.toLowerCase().includes(query.toLowerCase()) ||
            note.title.toLowerCase().includes(query.toLowerCase())
        );
    }


    static getPriorityName(priorityId) {
        const priorityValues = Object.values(this.PRIORITIES);
        for (const value of priorityValues) {
            if (value.id === priorityId) {
                return value.name;
            }
        }
    }



    filterNotesByPriority(priority) {
        const filteredByPriorityNotes = [];
        for (const note of this._notes) {
            if (note.priority === priority) {
                filteredByPriorityNotes.push(note);
                return filteredByPriorityNotes;
            }
        }
    }
}

Notepad.PRIORITIES = {
    0: {
        id: 0,
        value: 0,
        name: 'Low'
    },
    1: {
        id: 1,
        value: 1,
        name: 'Normal'
    },
    2: {
        id: 2,
        value: 2,
        name: 'High'
    }
};