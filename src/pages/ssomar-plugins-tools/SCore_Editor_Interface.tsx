import {useContext} from "react"
import { CurrentTooolContext } from "./SCore_Editor"
import { PlaceholderComponentPage } from "./tool_components/PlaceholderComponentPage"
import { RandomRun } from "./tool_components/RandomRun"



export const SCore_Editor_Interface = () => {

    const currentToolToDisplay = useContext(CurrentTooolContext)

    function displayMenu() {
        console.log(currentToolToDisplay.currentToolMenu?.type)
        switch(currentToolToDisplay.currentToolMenu?.type) {
            case "0": return <RandomRun />
            
            default: {
                return <PlaceholderComponentPage />
            }
        }
    }

    return (
        displayMenu()
    )
}