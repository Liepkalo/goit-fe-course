export const shortid = require('shortid');

export class Notepad {

    static generateUniqueId = shortid.generate();
    //static generateUniqueId = () =>
    //Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    constructor(notes = []) {
        this._notes = notes;
    }

    get notes() {
        return this._notes;
    }

    save(text1, text2) {
        const newItem = {
            id: Notepad.generateUniqueId(),
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

    /*saveNote(notes) {
    	this._notes.push(notes);
    	return this._notes;
    }

    updateNotePriority(id, priority) {
    	for (const note of this._notes) {
    		if (note.id === id) {
    			note.priority = priority;
    		}
    	}
    	return this._notes;
    }*/

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

/*updateNoteContent(id, updatedContent) {
	for (const note of this._notes) {
		if (note.id === id) {
			note[updatedContent.field] = updatedContent.value;
		}
		return this._notes;
	}
}*/

/*deleteNote(id) {
	for (let i = 0; i < this.notes.length; i += 1) {
		const note = this._notes[i];
		if (note.id === id) {
			this.notes.splice(i, 1);
			return;
		}
	}
}*/

/*filterNotesByQuery(filter = '') {
	const filteredNotes = [];
	for (const note of this._notes) {
		const {
			title,
			body
		} = note;
		const noteContent = `${title} ${body}`;
		const hasFilter = noteContent.toLowerCase().includes(filter.toLowerCase());

		if (hasFilter) {
			filteredNotes.push(note);
		}
	}
	return filteredNotes;
}*/