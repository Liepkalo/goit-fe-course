import {
    buttonActions
} from './js/utils/constants';


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

export const getRefs = () => ({
    list: document.querySelector('.list'),
    editor: document.querySelector('.editor'),
    filter: document.querySelector('.filter'),
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

export const createListItem = (notes) => {
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



export const handleFilterChange = (event) => {
    //console.log(event.target.value);
    const filteredItems = notepad.filter(event.target.value);
    renderListItems(refs.list, filteredItems);
};


export const removeListItem = element => {
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