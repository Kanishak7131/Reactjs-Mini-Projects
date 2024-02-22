import { useEffect } from "react";

export default function useWindow(ref, handler) {




    useEffect(() => {
        function handleToggle(event) {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler()
        }
        document.addEventListener("mousedown", handleToggle);
        document.addEventListener("touchstart", handleToggle);

        return () => {
            document.removeEventListener("mousedown", handleToggle);
            document.removeEventListener("touchstart", handleToggle);
        };
    }, [ref, handler]);

}