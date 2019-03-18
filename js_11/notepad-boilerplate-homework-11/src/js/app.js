import Notyf from 'notyf';
import Micromodal from 'micromodal';
import initialNotes from '../assets/notes.json';

import {
    NOTE_ACTIONS,
    ICON_TYPES,
    PRIORITY_TYPES
} from './utils/constants.js';
import Notepad from './utils/notepad-model';
import {
    getRefs,
    renderListItems,
    addItemToList,

} from './utils/view';

import 'notyf/dist/notyf.min.css';



const notepad = new Notepad(initialNotes);
const refs = getRefs();
const notyf = new Notyf();



// Handlers
const handleEditorSubmit = (event) => {
    event.preventDefault();

    const [input, input2] = event.currentTarget.elements;
    const inputValue = input.value;
    const inputValue2 = input2.value;

    if (inputValue.trim() === '' || inputValue2.trim() === '') {
        return notyf.alert('Необходимо заполнить все поля!');
    }

    const savedItem = notepad.save(inputValue, inputValue2);

    addItemToList(refs.list, savedItem);

    notyf.confirm('Заметка успешно добавлена!');
    Micromodal.close('note-editor-modal');

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

    if (target.parentNode.nodeName !== 'BUTTON') return;

    const action = target.parentNode.dataset.action;

    switch (action) {
        case NOTE_ACTIONS.DELETE:
            console.log('delete');
            removeListItem(target);

            break;

        default:
            console.log('invalid action!');
    }
};

const handleOpenEditor = () => {
    Micromodal.show('note-editor-modal');
};

renderListItems(refs.list, notepad.notes);

// Listeners
refs.editor.addEventListener('submit', handleEditorSubmit);
refs.filter.addEventListener('input', handleFilterChange);
refs.list.addEventListener('click', handleListClick);
refs.openEditorModalBtn.addEventListener('click', handleOpenEditor);