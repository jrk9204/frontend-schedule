import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface scheduleTypes {
    scheduleStore: {
        Sunday: [];
        Monday: [];
        Tuesday: [];
        Wednesday: [];
        Thursday: [];
        Friday: [];
        Saturday: [];
    };
    isChanged: false;
}

const initialState = {
    scheduleStore: {
        Sunday: [
            { id: 1, start: "01:15", end: "03:15" },
            { id: 2, start: "02:15", end: "04:15" },
            { id: 3, start: "03:15", end: "05:15" },
        ],
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
        Saturday: [],
    },
    isChanged: false,
};

export const searchSlice = createSlice({
    name: "scheduleData",
    initialState,
    reducers: {
        setDeleteData: (state, action: PayloadAction<Array<string>>) => {
            let [currWeekend, dataId] = action.payload;
            let filterData = state.scheduleStore[currWeekend].filter((el) => el.id !== dataId);

            console.log(action.payload[1], state.scheduleStore);
            state.scheduleStore[currWeekend] = filterData;
        },
        setAddData: (state, action: PayloadAction<string>) => {
            let lastIdx = state.scheduleStore[action.payload].length;

            let increaseId = 1;

            let startTime = "00:15";

            let endTime = "00:30";

            if (lastIdx) increaseId = state.scheduleStore[action.payload][lastIdx - 1].id + 1;

            let addData = { id: increaseId, start: startTime, end: endTime };

            state.scheduleStore[action.payload].push(addData);
        },
        setTimeData: (state, action: PayloadAction<Array<number>>) => {
            const [time, id, objectKey, date] = action.payload;

            state.scheduleStore[date].forEach((el) => {
                if (el.id === id) {
                    el[objectKey] = time;
                }
            });

            state.isChanged = true;
        },

        resetData: (state, action: PayloadAction<Array<number>>) => {
            state.scheduleStore = {
                Sunday: [{ id: 1, start: "00:00", end: "00:00" }],
                Monday: [{ id: 1, start: "00:00", end: "00:00" }],
                Tuesday: [{ id: 1, start: "00:00", end: "00:00" }],
                Wednesday: [{ id: 1, start: "00:00", end: "00:00" }],
                Thursday: [{ id: 1, start: "00:00", end: "00:00" }],
                Friday: [{ id: 1, start: "00:00", end: "00:00" }],
                Saturday: [{ id: 1, start: "00:00", end: "00:00" }],
            };

            state.isChanged = false;
        },

        updateData: (state, action: PayloadAction<Array<number>>) => {
            searchSlice.caseReducers.resetData(state, action);

            state.isChanged = false;
        },
    },
});

export const { setDeleteData, setAddData, setTimeData, resetData, updateData } =
    searchSlice.actions;

export default searchSlice.reducer;
