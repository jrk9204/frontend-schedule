import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import functionModule from "../components/commons/functionModule";
import { ObjectType, ScheduleTypes } from "../data/types";

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
    isShowTable: true,
} as ScheduleTypes;

export const searchSlice = createSlice({
    name: "scheduleData",
    initialState,
    reducers: {
        setDropModal: (state) => {
            state.isShowTable = !state.isShowTable;
        },
        setDeleteData: (state, action: PayloadAction<Array<string | number>>) => {
            let [currWeekend, dataId] = action.payload;
            let filterData = state.scheduleStore[currWeekend].filter(
                (el: ObjectType) => el.id !== dataId
            );

            state.scheduleStore[currWeekend] = filterData;
        },
        setAddData: (state, action: PayloadAction<string>) => {
            let lastIdx = state.scheduleStore[action.payload].length;
            let lastEle = state.scheduleStore[action.payload][lastIdx - 1];
            let increaseId = 1;
            let startTime = "00:00";
            let endTime = "00:00";

            if (lastIdx) {
                increaseId = lastEle.id + 1;
                startTime = functionModule.increaseTime(lastEle.start);
                endTime = functionModule.increaseTime(lastEle.end);
            }

            let addData = { id: increaseId, start: startTime, end: endTime };

            state.scheduleStore[action.payload].push(addData);
            state.isChanged = true;
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

        resetData: (state) => {
            state.scheduleStore = {
                Sunday: [],
                Monday: [],
                Tuesday: [],
                Wednesday: [],
                Thursday: [],
                Friday: [],
                Saturday: [],
            };

            state.isChanged = false;
        },

        updateData: (state, action: PayloadAction<Array<number>>) => {
            // searchSlice.caseReducers.resetData(state, action);
            window.alert("저장되었습니다");
            state.isChanged = false;
        },
    },
});

export const { setDropModal, setDeleteData, setAddData, setTimeData, resetData, updateData } =
    searchSlice.actions;

export default searchSlice.reducer;
