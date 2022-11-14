
// add item to cart
export const addNote = (text, time, date) => async (dispatch, getState) => {
    // console.log(getState())
    // const { data } = await axios.get(`/api/v1/product/${id}`)
    // console.log(data)
    dispatch({
        type: "ADD_NOTE",
        payload: {
            text: text,
            time: time,
            date: date,
        }
    })

    localStorage.setItem("NoteX", JSON.stringify(getState().jinal.notes));
    localStorage.setItem("NoteXID", JSON.stringify(getState().jinal.id));
}

export const deleteNote = (id) => async (dispatch, getState) => {
    dispatch({
        type: "DELETE_NOTE",
        payload: id

    })

    localStorage.setItem("NoteX", JSON.stringify(getState().jinal.notes));
    localStorage.setItem("NoteXID", JSON.stringify(getState().jinal.id));

}

export const editNote = (id, text, time, date) => async (dispatch, getState) => {
    dispatch({
        type: "EDIT_NOTE",
        payload: {
            id: id,
            text: text,
            time: time,
            date: date,
        }
    })

    localStorage.setItem("NoteX", JSON.stringify(getState().jinal.notes));
    localStorage.setItem("NoteXID", JSON.stringify(getState().jinal.id));
}
// // remove item from cart
// export const removeItemFromCart = (id) => (dispatch, getState) => {
//     dispatch({
//         type: REMOVE_FROM_CART,
//         payload: id
//     })

//     localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));


// }