import './sass/main.scss';
import {
    buttonActions
} from './js/utils/constants';
import {
    shortid
} from './js/utils/model';

import Notepad from './js/utils/model';

import initialNotes from './assets/notes.json';
import {
    getRefs,
    createListItem,
    renderListItems,
    addItemToList,
    removeListItem,
    handleFilterChange
} from './js/utils/view';



const notepad = new Notepad(initialNotes);