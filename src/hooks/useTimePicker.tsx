import { useEffect, useState } from "react";

function useTimePicker({ timeProps }) {
    const [pickedTime, setPickedTIme] = useState(timeProps);

    let times = [];

    function makeTimeOptions() {
        const timeOptions = [
            "00",
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
        ];
        const minsOptions = ["00", "15", "30", "45"];

        timeOptions.forEach((hours) => {
            minsOptions.forEach((mins) => {
                times.push(`${hours}:${mins}`);
            });
        });
    }

    makeTimeOptions();

    useEffect(() => {}, [pickedTime]);
}

export default useTimePicker;
