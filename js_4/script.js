'use strict';

/*
  Notepad Schema

    id: integer | string
    title: string
    body: string
    priority: integer [0-2]
*/

const PRIORITY_TYPES = {
    LOW: 0,
    NORMAL: 1,
    HIGH: 2
};

const notepad = {
    notes: [],
    getNotes() {
        return this.notes;
    },

    findNoteById(id) {
        for (const note of this.notes) {
            if (note.id === id) {
                return note;
            }
        }
    },

    saveNote(note) {
        this.notes.push(note);
        return this.notes;
    },

    deleteNote(id) {
        for (let i = 0; i < this.notes.length; i += 1) {
            const note = this.notes[i];

            if (note.id === id) {
                this.notes.splice(i, 1);
                return;
            }
        }
    },

    updateNoteContent(id, updatedContent) {
        const note = this.findNoteById(id);

        if (!note) return;
        note[updatedContent.field] = updatedContent.value;
        return this.notes;
    },

    updateNotePriority(id, priority) {
        const note = this.findNoteById(id);

        if (!note) return;

        note.priority = priority;
        return this.notes;
    },

    filterNotesByQuery(query = '') {
        const filteredNotes = [];

        for (const note of this.notes) {
            const {
                title,
                body
            } = note;
            const noteContent = `${title} ${body}`;
            const hasQuery = noteContent.toLowerCase().includes(query.toLowerCase());

            if (hasQuery) {
                filteredNotes.push(note);
            }
        }

        return filteredNotes;
    },

    filterNotesByPriority(priority) {
        const filteredByPriorityNotes = [];
        for (const note of this.notes) {
            if (note.priority === priority) {
                filteredByPriorityNotes.push(note);
                return filteredByPriorityNotes;
            }
        }
    }
};

/*
 * Добавляю 4 заметки и смотрю что получилось
 */
notepad.saveNote({
    id: 1,
    title: 'JavaScript essentials',
    body: 'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: PRIORITY_TYPES.HIGH,
});

notepad.saveNote({
    id: 2,
    title: 'Refresh HTML and CSS',
    body: 'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: PRIORITY_TYPES.NORMAL,
});

notepad.saveNote({
    id: 3,
    title: 'Get comfy with Frontend frameworks',
    body: 'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: PRIORITY_TYPES.NORMAL,
});

notepad.saveNote({
    id: 4,
    title: 'Winter clothes',
    body: "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: PRIORITY_TYPES.LOW,
});

console.log('Все текущие заметки: ', notepad.getNotes());

/*
 * Зима уже близко, пора поднять приоритет на покупку одежды
 */
notepad.updateNotePriority(4, PRIORITY_TYPES.NORMAL);
// Смотрю что у меня в заметках
console.log(
    'Заметки после обновления приоритета для id 4: ',
    notepad.getNotes(),
);

notepad.updateNotePriority(3, PRIORITY_TYPES.LOW);
console.log(
    'Заметки после обновления приоритета для id 3: ',
    notepad.getNotes(),
);

/*
 * Решил отфильтровать заметки по слову html
 */
console.log(
    'Отфильтровали заметки по ключевому слову "html": ',
    notepad.filterNotesByQuery('html'),
);

/*
 * Решил отфильтровать заметки по слову javascript
 */
console.log(
    'Отфильтровали заметки по ключевому слову "javascript": ',
    notepad.filterNotesByQuery('javascript'),
);

/*
 * Хочу посмотреть только заметки с нормальным приоритетом
 */
console.log(
    'Отфильтровали заметки по нормальному приоритету: ',
    notepad.filterNotesByPriority(PRIORITY_TYPES.NORMAL),
);

/*
 * Обновим контент заметки с id 3
 */
notepad.updateNoteContent(3, {
    title: 'Get comfy with React.js or Vue.js'
});
console.log(
    'Заметки после обновления контента заметки с id 3: ',
    notepad.getNotes(),
);

/*
 * Повторил HTML и CSS, удаляю запись c id 2
 */
notepad.deleteNote(2);
console.log('Заметки после удаления с id 2: ', notepad.getNotes());