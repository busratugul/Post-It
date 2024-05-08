import { createSlice } from "@reduxjs/toolkit"

export const notesSlice = createSlice({
    name: "notes",
    initialState: {
       items: []
    }
})

export default notesSlice.reducer