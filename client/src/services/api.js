const URL = 'http://localhost:3000/notes';

export const getNotes = () => {
    return fetch(URL).then(response => {
        if (response.ok) {
            return response.json();
        }

        throw new Error('Error while fetching:' + response.statusText);
    });
};

export const saveNotes = note => {
    const opts = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
    };
    return fetch(URL, opts).then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Error while fetching: ' + response.statusText);
    });
};

export const deleteNoteId = id => {
    const opts = {
        method: 'DELETE',
    };
    return fetch(`${URL}/${id}`, opts).then(response => {
        if (response.ok) {
            return response.json();
        }

        throw new Error('Error while fething ' + response.statusText);
    });
};

export const updateNotes = (id, noteField) => {
    const opts = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(noteField),
    };

    return fetch(`${URL}/${id}`, opts).then(response => {
        if (response.ok) {
            return response.json();
        }

        throw new Error('Error while fetching ' + response.statusText);
    });
};