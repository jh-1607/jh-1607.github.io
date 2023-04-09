import styled from "styled-components";
// import GlobalStyle from '../../components/GlobalStyle';
import {Helmet} from 'react-helmet';
import MainContainer from '../../components/MainContainer';
import Topbar from '../../components/Topbar';
import PageContents from '../../components/PageContents';

const Words = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    a {
        color: white;
    }
`;

const TopbarEntriesFavSites = {
    "About": {
        "About Me": "/about/about_me"
    },
    "Cool Places": {
        "Favorite Websites": "../places/favorite_sites"
    },
    "Projects": {
        "Current Projects": "current_projects",
        "Past Projects": "past_projects",
        "Projects I wish I had time to work on": "piwihttwo"
    }
};

export default function piwihttwo() {
    return(
        <>
            <Helmet>
                <title>Projects I wish I had time to work on</title>
            </Helmet>
            <MainContainer>
                <Topbar entries={TopbarEntriesFavSites}/>
                <PageContents>
                    <Words>
                        <h3>Projects I wish I had time to work on</h3>
                        <p>Literally everything in the "Current Projects" page.</p>
                    </Words>
                </PageContents>
            </MainContainer>
        </>
    )
}
