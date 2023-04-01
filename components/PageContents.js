import styled from "styled-components";

const PageDiv = styled.div`
    display: flex;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 15px;
    padding-right: 15px;
    width: fit-content;
    height: fit-content;
    max-width: 95%;
    background-color: rgba(44, 39, 39, 0.8);  /* Add some blending */

    font-family: "default_sans";
    color: white;
    text-align: left;
    z-index: -1;
`;

export default function PageContents(props) {
    return (
        <PageDiv>{props.children}</PageDiv>
    )
}
