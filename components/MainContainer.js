import styled from 'styled-components';

const MainDiv = styled.div`
    margin: 0;
    padding: 0;
`;

export default function MainContainer(props) {
    return(<MainDiv>{props.children}</MainDiv>)
}
