export interface ObjectType {
    id: number;
    start: string;
    end: string;
}
export interface WeekendTypes {
    Sunday: Array<ObjectType>;
    Monday: Array<ObjectType>;
    Tuesday: Array<ObjectType>;
    Wednesday: Array<ObjectType>;
    Thursday: Array<ObjectType>;
    Friday: Array<ObjectType>;
    Saturday: Array<ObjectType>;
}
export interface ScheduleTypes {
    scheduleStore: WeekendTypes;
    isChanged: boolean;
    isShowTable: boolean;
}

export interface IconNameProps {
    iconName: any;
    handleArrow: () => void;
}

export interface ButtonsProps {
    handleReset: () => void;
    handleUpdate: () => void;
}

export interface HandleBtn {
    handleFunction: () => void;
    title: string;
    color: string;
    backgroundColor: string;
}

export interface SetInputProps {
    currScheduleData: ObjectType;
    weekendDate: string;
}

export interface TimeInputProps {
    date: string;
    objectKey: string;
    dataProps: ObjectType;
}

export interface InputBodyProps {
    dataList: WeekendTypes;
    weekend: string;
}

export interface ImgDataType {
    breeds: Array<string>;
    height: number;
    id: string;
    url: string;
    width: number;
}

export interface ImageSliceType {
    imgData: Array<Array<ImageData>>;
    loading: boolean;
}
