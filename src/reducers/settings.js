let initialState = {
    language: 'EN',
    week: [7, 1, 2, 3, 4, 5, 6]
}

export default function settings(state=initialState, action) {
    switch (action.type) {
        default: {
            return state;
        }
    }
}