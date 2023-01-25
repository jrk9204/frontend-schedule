function increaseTime(time: string) {
    let splitTime = time.split(":");
    let hours = splitTime[0];
    let mins = splitTime[1];

    if (Number(mins) + 15 >= 60) {
        mins = "00";
        hours = `0` + String(Number(hours) + 1);

        if (Number(hours) >= 12) {
            console.log(hours);
            hours = "00";
        }
    } else {
        mins = String(Number(mins) + 15);
    }

    return `${hours}:${mins}`;
}

function makeTimeOptions() {
    let times: Array<string> = [];
    const timeOptions = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"];
    const minsOptions = ["00", "15", "30", "45"];

    timeOptions.forEach((hours) => {
        minsOptions.forEach((mins) => {
            times.push(`${hours}:${mins}`);
        });
    });

    return times;
}

const functionModule = {
    increaseTime,
    makeTimeOptions,
};
export default functionModule;
