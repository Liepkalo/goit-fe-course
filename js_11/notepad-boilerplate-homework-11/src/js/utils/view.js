import {
    NOTE_ACTIONS,
    ICON_TYPES,
    PRIORITY_TYPES
} from './constants.js';
import noteTemplate from '../../templates/note.hbs';
import Notepad from './notepad-model';


export const getRefs = () => ({
    list: document.querySelector('.note-list'),
    editor: document.querySelector('.note-editor'),
    filter: document.querySelector('.search-form__input'),
    openEditorModalBtn: document.querySelector(
        'button[data-action="open-editor"]',
    ),

});

const createListItem = notes => {
    return noteTemplate(notes);
};

export const renderListItems = (listRef, notes) => {
    const listItems = notes.map(note => createListItem(note)).join('');
    listRef.innerHTML = '';
    listRef.insertAdjacentHTML('beforeend', listItems);
};

export const addItemToList = (listRef, note) => {
    const listItem = createListItem(note);
    listRef.insertAdjacentHTML('beforeend', listItem);
};