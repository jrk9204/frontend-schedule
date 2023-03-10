import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { ImageSliceType } from "../data/types";
import { ImgDataType } from "./../data/types";

const initialState = {
    imgData: [[], [], []],
    loading: false,
} as ImageSliceType;

export const asyncUpFetch = createAsyncThunk("getImageData", async () => {
    let apiData: ImgDataType = await axios.get(
        `https://api.thecatapi.com/v1/images/search?limit=30&api_key=${process.env.REACT_APP_API_KEY}`
    );

    return apiData;
});

export const imgDataSlice = createSlice({
    name: "imageData",
    initialState,
    reducers: {
        setDropModal: (state, action: PayloadAction<any>) => {
            state.imgData.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(asyncUpFetch.pending, (state) => {
                state.loading = true;
            })
            .addCase(asyncUpFetch.fulfilled, (state, { payload }: any) => {
                state.loading = false;

                let column = 0;

                for (let i = 0; i < payload.data.length; i++) {
                    if (column === 0) {
                        state.imgData[0].push(payload.data[i]);

                        column += 1;
                    } else if (column === 1) {
                        state.imgData[1].push(payload.data[i]);

                        column += 1;
                    } else {
                        state.imgData[2].push(payload.data[i]);
                        column = 0;
                    }
                }

                // state.imgData.push(...payload.data);
            })
            .addCase(asyncUpFetch.rejected, (state, { payload }) => {
                state.loading = false;
                console.log("failed to load resources");
            });
    },
});

export default imgDataSlice.reducer;
