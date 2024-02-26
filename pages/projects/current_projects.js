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
        "About Me": "/about/about_me",
        "Links": "/about/links"
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

export default function current_projects() {
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
                        <p>Once projects on this list are completed, they will eventually be moved to the &#34;Past Projects&#34; page.</p>
                        <ul>
                            <li><u>The Luxury Elite (Skoolie Build)</u></li>
                            <li><s>Centralized Archival System for Home Networks (CASH)</s> - This project has been completed!</li> {/* Note to future self you will need to create entry in past projects. */}
                            <li>OG-PMS (Off Grid Power Management System)</li>
                            <ul>
                                <li>This one will likely be completed as a child project of the Luxury Elite.</li>
                            </ul>
                        </ul>
                        <p>
                            One thing I failed to realize is how much time, or the lack thereof, I would have in completing these projects.
                            Thus, these will be on this list for quite a while.
                        </p>
                        <p>
                        <em><b>
                            So far, the "Luxury Elite" is next on the list. I am in need of a number of tools
                            and especially a suitable property. The current property I'm on will probably suffice but I will need to get creative with it or find a better one to
                            begin the project (due to size limitations). If you or anyone you know might have a good deal on a house with a suitable acreage to accomodate a roughly 40ft long bus, please email me details
                            as listed on my LinkedIn (see links page under &#34;About&#34; above). I am looking for a long term investment with a solid house no smaller than 1,200 sq. ft on the property, less than or equal to 250K in price.
                            I would also prefer the property to be in an unincorporated area within 50 miles of Chattanooga. I intend for this property to be a permanent home of operations for the next
                            ten to twenty years with the end goal to be fully owned within thirty years if time permits. 
                        </b></em>
                        </p>
                    </Words>
                </PageContents>
            </MainContainer>
        </>
    )
}
