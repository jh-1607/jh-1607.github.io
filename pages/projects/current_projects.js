import styled from "styled-components";
// import GlobalStyle from '../../components/GlobalStyle';
import {Helmet} from 'react-helmet';
import MainContainer from '../../components/MainContainer';
import Topbar from '../../components/Topbar';
import PageContents from '../../components/PageContents';

const Words = styled.div`
    display: flex;
    flex-direction: column;
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

export default function favorite_sites() {
    return(
        <>
            <Helmet>
              <title>Current Projects</title>
            </Helmet>
            <MainContainer>
                <Topbar entries={TopbarEntriesFavSites}/>
                <PageContents>
                    <Words>
                        <h2>Current Projects</h2>
                        <p>As of right now this is just a list of projects until I get time to write about these in detail.</p>
                        <ul>
                            <li>The Luxury Elite (Skoolie Build)</li>
                            <li>Centralized Archival System for Home Networks (CASH)</li>
                            <li>OG-PMS (Off Grid Power Management System)</li>
                        </ul>
                        <p>
                            One thing I failed to realize is how much time, or the lack thereof, I would have in completing these projects.
                            Thus, these will be on this list for quite a while. I'm no quitter, so these will definitely get done, ESPECIALLY
                            "The Luxury Elite" (if any of these are getting done, it'll be this one). I've set the goals and plans have been made, 
                            I just need to follow through and complete these projects time permitting...
                        </p>
                    </Words>
                </PageContents>
            </MainContainer>
        </>
    )
}
