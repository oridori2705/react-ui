import { ReactNode } from "react"
import { UiExplanationContainer } from "./UiExplanation.styled"

const UiExplanation = ({children}:{children:ReactNode})=>{
    return (
    <UiExplanationContainer>
        <div>
        {children}
        </div>
    </UiExplanationContainer>
    )
}

export default UiExplanation