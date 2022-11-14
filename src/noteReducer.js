export const noteReducer = (state = { notes: [], id: 0 }, action) => {
    switch (action.type) {
        case "ADD_NOTE":
            const itemText = action.payload.text;
            const itemTime = action.payload.time;
            const itemDate = action.payload.date;

            // const isItemExist = state.notes.find(i => i.id === item.id);
            const item = { text: itemText, time: itemTime, date: itemDate, id: state.id + 1 }

            return {
                ...state,
                notes: [item, ...state.notes],
                id: state.id + 1
            }

        case "DELETE_NOTE":
            const res = state.notes.filter((i) => i.id !== action.payload);
            return {
                ...state,
                notes: res,
                id: state.id
            }

        case "EDIT_NOTE":
            const myArray = state.notes;
            const objIndex = myArray.findIndex((obj => obj.id === action.payload.id));

            myArray[objIndex].time = action.payload.time;
            myArray[objIndex].text = action.payload.text;
            myArray[objIndex].date = action.payload.date;

            return {
                ...state,
                notes: myArray,
                id: state.id
            }

        default:
            return state

    }

}