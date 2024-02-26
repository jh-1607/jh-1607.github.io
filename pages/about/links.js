import styled from "styled-components";
import {Helmet} from 'react-helmet';
import MainContainer from '../../components/MainContainer';
import Topbar from '../../components/Topbar';
import PageContents from '../../components/PageContents';

const LinksDiv = styled.div`
    font-family: "default_sans";
    color: white;
    text-align: center;
`;

const PageImg = styled.img`
    width: 162px;
    height: 52px;
    object-fit: contain;
    margin: auto;
    z-index: 0;
    top: 5px;    
    padding: 7px 10px 10px 7px;
`;

const TopbarEntriesLinks = {
    "About": {
        "About Me": "/about/about_me",
        "Links": "/about/links"
    },
    "Cool Places": {
        "Favorite Websites": "/places/favorite_sites"
    },
    "Projects": {
        "Current Projects": "/projects/current_projects",
        "Past Projects": "/projects/past_projects",
        "Projects I wish I had time to work on": "/projects/piwihttwo"
    }
};

export default function links () {
    return (
        <>
            <Helmet>
              <title>Links</title>
            </Helmet>
            <MainContainer>
                <Topbar entries={TopbarEntriesLinks}/>
                <PageContents>
                    <LinksDiv>
                        <h2>Links</h2>
                        <a href="https://www.linkedin.com/in/jacob-hays-99752720b" target="_blank" rel="noreferrer noopener"><PageImg src="/images/LI-Logo.png" alt="LinkedIn logo."/></a>
                    </LinksDiv>
                </PageContents>
            </MainContainer>
        </>
    )
}
