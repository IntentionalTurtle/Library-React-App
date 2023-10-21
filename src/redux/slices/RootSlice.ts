import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root", //required
    initialState: { //required
        ISBN: "ISBN",
        author: "Author",
        hard_paper: "HardPaper",
        in_inventory: "In Inventory",
        title: "title",
        pub_year: "Publication Year"
    },
    reducers: {
        //action is submitted elsewhere - written to state.first
        chooseISBN: (state, action) => { state.ISBN = action.payload}, 
        chooseAuthor: (state, action) => { state.author = action.payload},
        chooseHardPaper: (state, action) => { state.hard_paper = action.payload},
        chooseInInventory: (state, action) => { state.in_inventory = action.payload},
        chooseTitle: (state, action) => { state.title = action.payload},
        choosePubYear: (state, action) => { state.pub_year = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseISBN, chooseAuthor, chooseHardPaper, chooseInInventory, choosePubYear, chooseTitle} = rootSlice.actions