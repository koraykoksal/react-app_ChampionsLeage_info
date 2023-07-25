import { createContext } from "react";
import {championsLeage} from "../helper/cl.js"

const Champions= createContext();

const [cl, setcl] = useState({})




export const ChampionsProvider = ({children}) =>{

    return (
        <Champions>{children}</Champions>
    )
}



