import styled from "styled-components";
import {useState} from "react";


const Tooltip = styled.h4`
    margin: 0;
`;

export default function ToggleDiv({header, tooltip, children}) {
    const [showEntry, setEntry] = useState(false);

    return(
        <>
            <h3 onClick={() => setEntry(prev => !prev)} style={{cursor: "pointer"}}>{header}</h3>
            {showEntry ? <div>
                {children}
            </div> : <Tooltip>{tooltip}</Tooltip>}
        </>
    )
}
