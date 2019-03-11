import initialNotes from './notes.json';

import {
    NOTE_ACTIONS,
    ICON_TYPES,
    PRIORITY_TYPES
} from './constants';
import Notepad from './notepad-model';
import {
    getRefs,
    renderListItems,
    addItemToList
} from './view';






const notepad = new Notepad(initialNotes);
const refs = getRefs();




// Handlers
const handleEditorSubmit = (event) => {
    event.preventDefault();

    const [input, input2] = event.currentTarget.elements;
    const inputValue = input.value;
    const inputValue2 = input2.value;

    if (inputValue.trim() === '' || inputValue2.trim() === '') {
        return alert('Необходимо заполнить все поля!');
    }

    const savedItem = notepad.save(inputValue, inputValue2);

    addItemToList(refs.list, savedItem);

    event.currentTarget.reset();

};



const handleFilterChange = (event) => {
    //console.log(event.target.value);
    const filteredItems = notepad.filter(event.target.value);
    renderListItems(refs.list, filteredItems);
};


const removeListItem = element => {
    const parentListItem = element.closest('.note-list__item');
    const id = parentListItem.dataset.id;

    notepad.delete(id);
    parentListItem.remove();
    console.table(notepad._notes);

};

const handleListClick = ({
    target
}) => {

    if (target.nodeName !== 'I') return;

    const action = target.dataset.action;

    switch (action) {
        case NOTE_ACTIONS.DELETE:
            console.log('delete');
            removeListItem(target);

            break;

        default:
            console.log('invalid action!');
    }
};

renderListItems(refs.list, notepad.notes);

// Listeners
refs.editor.addEventListener('submit', handleEditorSubmit);
refs.filter.addEventListener('input', handleFilterChange);
refs.list.addEventListener('click', handleListClick);