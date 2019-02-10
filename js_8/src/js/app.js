'use strict';

const PRIORITY_TYPES = {
	LOW: 0,
	NORMAL: 1,
	HIGH: 2
};

const ICON_TYPES = {
	EDIT: 'edit',
	DELETE: 'delete',
	ARROW_DOWN: 'expand_more',
	ARROW_UP: 'expand_less'
};

const NOTE_ACTIONS = {
	DELETE: 'delete-note',
	EDIT: 'edit-note',
	INCREASE_PRIORITY: 'increase-priority',
	DECREASE_PRIORITY: 'decrease-priority'
};

const initialNotes = [{
		id: 1,
		title: 'JavaScript essentials',
		body: 'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
		priority: PRIORITY_TYPES.HIGH
	},
	{
		id: 2,
		title: 'Refresh HTML and CSS',
		body: 'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
		priority: PRIORITY_TYPES.NORMAL
	},
	{
		id: 3,
		title: 'Get comfy with Frontend frameworks',
		body: 'First should get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
		priority: PRIORITY_TYPES.NORMAL
	},
	{
		id: 4,
		title: 'Winter clothes',
		body: "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
		priority: PRIORITY_TYPES.LOW
	}
];

class Notepad {

	constructor(notes = []) {
		this._notes = notes;
	};

	get notes() {
		return this._notes;
	};


	static getPriorityName(priorityId) {
		const priorityValues = Object.values(this.PRIORITIES);
		for (const value of priorityValues) {
			if (value.id === priorityId) {
				return value.name;
			}
		}


	}

	saveNote(notes) {
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
	};

	filterNotesByPriority(priority) {
		const filteredByPriorityNotes = [];
		for (const note of this._notes) {
			if (note.priority === priority) {
				filteredByPriorityNotes.push(note);
				return filteredByPriorityNotes;
			}
		}
	};

	updateNoteContent(id, updatedContent) {
		for (const note of this._notes) {
			if (note.id === id) {
				note[updatedContent.field] = updatedContent.value;
			}
			return this._notes;
		}
	};


	deleteNote(id) {
		for (let i = 0; i < this.notes.length; i += 1) {
			const note = this._notes[i];
			if (note.id === id) {
				this.notes.splice(i, 1);
				return;
			}
		}
	};

	filterNotesByQuery(filter = '') {
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
	};

}

const notepad = new Notepad(initialNotes);

const createNoteContent = (notes) => {

	const noteContent = document.createElement('div');
	noteContent.classList.add('note__content');

	const noteTitle = document.createElement('h2');
	noteTitle.classList.add('note__title');
	noteTitle.textContent = notepad.notes.title

	const noteBody = document.createElement('p');
	noteBody.classList.add('note__body');
	noteBody.textContent = notepad.notes.body;

	noteContent.append(noteTitle, noteBody);

	return noteContent;
};

const createActionButton = () => {

	const section1 = document.createElement('section');
	section1.classList.add('note__section');

	const decreasePrioritybutton = document.createElement('button');
	decreasePrioritybutton.classList.add('action');
	decreasePrioritybutton.dataset.action = NOTE_ACTIONS.DECREASE_PRIORITY;

	const iconExpandless = document.createElement('i');
	iconExpandless.classList.add('material-icons', 'action__icon');
	iconExpandless.dataset.action = ICON_TYPES.ARROW_DOWN;
	iconExpandless.textContent = 'expand_less';

	const increasePrioritybutton = document.createElement('button');
	increasePrioritybutton.classList.add('action');
	increasePrioritybutton.dataset.action = NOTE_ACTIONS.INCREASE_PRIORITY;


	const iconExpandmore = document.createElement('i');
	iconExpandmore.classList.add('material-icons', 'action__icon');
	iconExpandmore.textContent = 'expand_more';
	iconExpandless.dataset.action = ICON_TYPES.ARROW_UP;

	const notePriority = document.createElement('span');
	notePriority.classList.add('note__priority');
	notePriority.textContent = "prioprity:.....";
	decreasePrioritybutton.appendChild(iconExpandless);
	increasePrioritybutton.appendChild(iconExpandmore);


	section1.append(decreasePrioritybutton, increasePrioritybutton, notePriority);

	const section2 = document.createElement('section');
	section2.classList.add('note__section');

	const editNotebutton = document.createElement('button');
	editNotebutton.classList.add('action');
	editNotebutton.dataset.action = NOTE_ACTIONS.EDIT;

	const iconEdit = document.createElement('i');
	iconEdit.classList.add('material-icons', 'action__icon');
	iconEdit.textContent = 'edit';

	const deliteNotebutton = document.createElement('button');
	deliteNotebutton.classList.add('action');
	deliteNotebutton.dataset.action = NOTE_ACTIONS.DELITE;

	const iconDelite = document.createElement('i');
	iconDelite.classList.add('material-icons', 'action__icon');
	iconDelite.textContent = 'delete';


	editNotebutton.appendChild(iconEdit);
	deliteNotebutton.appendChild(iconDelite);

	section2.append(editNotebutton, deliteNotebutton);

	return section1, section2;

};
const createNoteFooter = () => {

	const noteFooter = document.createElement('footer');
	noteFooter.classList.add('note__footer');

	noteFooter.appendChild(createActionButton());

	return noteFooter;
};


const createListItem = (notes) => {

	const listItem = document.createElement('li');
	listItem.classList.add('note-list__item');
	listItem.dataset.id = notes.id;

	const globalNote = document.createElement('div');
	globalNote.classList.add('note');

	listItem.appendChild(globalNote);

	globalNote.append(createNoteContent(notes), createNoteFooter());
	return listItem;

};


const renderListItems = (listRef, notes) => {
	const listItems = (notepad.notes).map(item => createListItem(notes));
	listRef.append(...listItems)
};

const list = document.querySelector('.note-list');
renderListItems(list, notepad.notes);
