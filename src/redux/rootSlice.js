import {createSlice} from '@reduxjs/toolkit';
//single root slicer for now, may need to create more if project scales
export const rootSlice = createSlice({
    name: "root",
    initialState: {
        url: [],
    },
    reducers: {
        setUrl: (state, action) => {
            state.url = action.payload
        }
    }
});

//exporting out the action creators
export const { setUrl } = rootSlice.actions;

//exporting out the reducer
export default rootSlice.reducer;