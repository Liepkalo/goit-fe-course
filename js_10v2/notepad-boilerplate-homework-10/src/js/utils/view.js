import {
    NOTE_ACTIONS,
    ICON_TYPES,
    PRIORITY_TYPES
} from './constants.js';

import Notepad from './notepad-model';

export const getRefs = () => ({
    list: document.querySelector('.note-list'),
    editor: document.querySelector('.note-editor'),
    filter: document.querySelector('.search-form__input')
});

const createNoteContent = (notes) => {
    const noteContent = document.createElement('div');
    noteContent.classList.add('note__content');

    const noteTitle = document.createElement('h2');
    noteTitle.classList.add('note__title');
    noteTitle.textContent = notes.title;

    const noteBody = document.createElement('p');
    noteBody.classList.add('note__body');
    noteBody.textContent = notes.body;

    noteContent.append(noteTitle, noteBody);

    return noteContent;
};

const createActionButton1 = (notes) => {
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
    iconExpandmore.dataset.action = ICON_TYPES.ARROW_UP;
    iconExpandmore.textContent = 'expand_more';


    const notePriority = document.createElement('span');
    notePriority.classList.add('note__priority');
    notePriority.textContent = Notepad.getPriorityName(notes.priority);
    decreasePrioritybutton.appendChild(iconExpandless);
    increasePrioritybutton.appendChild(iconExpandmore);

    section1.append(decreasePrioritybutton, increasePrioritybutton, notePriority);

    return section1;
};
const createActionButton2 = () => {
    const section2 = document.createElement('section');
    section2.classList.add('note__section');

    const editNotebutton = document.createElement('button');
    editNotebutton.classList.add('action');
    editNotebutton.dataset.action = NOTE_ACTIONS.EDIT;

    const iconEdit = document.createElement('i');
    iconEdit.classList.add('material-icons', 'action__icon');
    iconEdit.dataset.action = NOTE_ACTIONS.EDIT;
    iconEdit.textContent = 'edit';

    const deliteNotebutton = document.createElement('button');
    deliteNotebutton.classList.add('action');
    deliteNotebutton.dataset.action = NOTE_ACTIONS.DELETE;

    const iconDelite = document.createElement('i');
    iconDelite.classList.add('material-icons', 'action__icon');
    iconDelite.dataset.action = NOTE_ACTIONS.DELETE;
    iconDelite.textContent = 'delete';

    editNotebutton.appendChild(iconEdit);
    deliteNotebutton.appendChild(iconDelite);

    section2.append(editNotebutton, deliteNotebutton);

    return section2;
};
const createNoteFooter = (notes) => {
    const noteFooter = document.createElement('footer');
    noteFooter.classList.add('note__footer');

    noteFooter.append(createActionButton1(notes), createActionButton2());

    return noteFooter;
};

const createListItem = (notes) => {
    const listItem = document.createElement('li');
    listItem.classList.add('note-list__item');
    listItem.dataset.id = notes.id;

    const globalNote = document.createElement('div');
    globalNote.classList.add('note');

    listItem.appendChild(globalNote);

    globalNote.append(createNoteContent(notes), createNoteFooter(notes));
    return listItem;
};

export const renderListItems = (listRef, notes) => {
    const listItems = notes.map(note => createListItem(note));

    listRef.innerHTML = '';
    listRef.append(...listItems);
};

export const addItemToList = (listRef, note) => {
    const listItem = createListItem(note);

    listRef.appendChild(listItem);
};