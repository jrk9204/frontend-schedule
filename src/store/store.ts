import { configureStore } from "@reduxjs/toolkit";
import scheduleData from "./dataSlice";

const store = configureStore({
    reducer: {
        sdheduleState: scheduleData,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
