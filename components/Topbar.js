import styled from 'styled-components';
import Link from 'next/link';

const TopbarObject = styled.div`
    background-color: rgb(44, 39, 39);
    display: flex;
    overflow: visible;
    position: fixed;
    align-items: center;
    justify-content: center;
    text-align: center;
    top: 0;
    margin: 0;
    width: 100%;
    height: 40px;
    z-index: 1;
`;

const DropContainer = styled.div`
    float: left;
    justify-items: center;
`;

const DropFieldLink = styled(Link)`
    display: block;
    float: none;
    color: rgb(191, 203, 216);
    padding: 7px 10px;
    text-decoration: none;
    text-align: left;

    &:hover {
        background-color: gray;
    }
`;

const DropFields = styled.div`
    display: none;
    background-color: rgb(44, 39, 39);
    position: absolute;
    border: none;
    outline: none;
    color: white;
    top: 30px;
    margin: 0;
    padding: 7px 7px;
    width: max-content;
    font-size: 16px;
    font-family: inherit;
`;

const TopbarContents = styled.span`
    position: relative;
    display: inline-block;
    font-size: 16px;
    font-family: "Verdana", "Geneva", serif;
    color: rgb(191, 203, 216);
    padding-left: 7px;
    padding-right: 7px;
    padding-bottom: 20px;
    margin-bottom: -20px;
    z-index: 100;

    &:hover {
        text-shadow: 2px 2px rgb(162,25,32);
        ${DropFields} {
            display: block;
            text-shadow: none;
        }
    }
`;

const LeftTopbarContents = styled.div`
    position: absolute;
    font-size: 16px;
    padding-left: 0px;
    padding-right: 7px;
    cursor: pointer;
    left: 7px;

    a {
        font-size: 16px;
        font-family: "Verdana", "Geneva", serif;
        color: rgb(191, 203, 216);
        border: none;
        text-decoration: none;
        outline: none;
    }
`;

const RightTopbarContents = styled.div`
    position: absolute;
    font-size: 16px;
    padding-left: 7px;
    padding-right: 0px;
    right: 7px;
`;

/** Topbar component at top of pages for website.
 * 
 * @param {Object} entries dictionary containing string of headers and dictionary for link name and path. 
 * @returns Topbar component for main page.
 */
export default function Topbar({entries}) {
    let headers = [];
    let headerMappings = {};
    for (let key in entries) {
        headers.push(key);
        for (let otherkey in entries[key]) {
            if (!headerMappings[key]) {
                headerMappings[key] = [otherkey];
            } else {
                headerMappings[key].push(otherkey);
            }
        }
    }

    return(
        <TopbarObject>
            <LeftTopbarContents>
                <TopbarContents><Link href="/">Reset</Link></TopbarContents>
            </LeftTopbarContents>
            {headers.map((value) => (
                <TopbarContents key={value}>{value}
                    <DropContainer>
                        <DropFields>
                            {headerMappings[value].map((linkName) => (
                                <DropFieldLink key={linkName} href={entries[value][linkName]}>{linkName}</DropFieldLink>
                            ))}
                        </DropFields>
                    </DropContainer>
                </TopbarContents>
            ))}
        </TopbarObject>
    )
}
