import { useEffect } from "react";
import { asyncUpFetch } from "../store/imageSlice";
import { useAppDispatch } from "../store/reduxHooks";

function UseInifinite() {
    const dispatch = useAppDispatch();

    function InfinitFunc() {
        useEffect(() => {
            const handleScroll = () => {
                const { scrollTop, offsetHeight } = document.documentElement;
                if (window.innerHeight + scrollTop >= offsetHeight) {
                    dispatch(asyncUpFetch());
                }
            };
            dispatch(asyncUpFetch());
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []);
    }

    return { InfinitFunc };
}

export default UseInifinite;
