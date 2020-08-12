import {useEffect} from "react";
import {useLocalStorage} from "../hooks/useLocalStorage";

const useDarkMode = (key) => {

        const [darkMode, setDarkMode] = useLocalStorage(key, false);
        
        useEffect(()=>{
            if (darkMode){
                document.querySelector("body").classList.add("dark-mode");
            } else {
                document.querySelector("bodhy").classList.remove("dark-mode");
            }
        }, [darkMode]);

        return [darkMode, setDarkMode];
}

export default useDarkMode;