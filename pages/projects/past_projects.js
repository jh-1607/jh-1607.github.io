import styled from "styled-components";
// import GlobalStyle from '../../components/GlobalStyle';
import {Helmet} from "react-helmet";
import MainContainer from "../../components/MainContainer";
import Topbar from "../../components/Topbar";
import PageContents from "../../components/PageContents";
import ImageCarousel from "../../components/ImageCarousel";
import ToggleDiv from "../../components/ToggleDiv";

const Words = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 800px;
    padding-bottom: 20px;
    a {
        color: white;
    }
    hr {
        width: 500px;
    }
    h3 {
        border-bottom: 1px solid white;
        padding-bottom: 5px;
    }
`;

const PageImg = styled.img`
    width: 90%;
    height: auto;
    margin: auto;
    z-index: 0;
    top: 5px;    
    padding: 7px 10px 10px 7px;
`;

const Tooltip = styled.h4`
    margin: 0;
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

const TruckImages = [
    {
        src: "/images/TRUCK00.jpg",
        caption: "Lawnmower assisted drivetrain removal."
    },
    {
        src: "/images/TRUCK01.jpg",
        caption: "View of block after teardown."
    },
    {
        src: "/images/TRUCK02.jpg",
        caption: "Right hand bank after rebuild."
    },
    {
        src: "/images/TRUCK03.jpg",
        caption: "Left hand bank after rebuild."
    },
    {
        src: "/images/TRUCK04.jpg",
        caption: "New heads installed on engine."
    },
    {
        src: "/images/TRUCK05.jpg",
        caption: "Engine mated back to transmission."
    },
    {
        src: "/images/TRUCK06.jpg",
        caption: "Drivetrain back in the truck."
    },
    {
        src: "/images/TRUCK07.jpg",
        caption: "View of Tundy the pickup truck reassembled."
    },
    {
        src: "/images/TRUCK08.jpg",
        caption: "The ODOMETER!"
    }
];

export default function past_projects() {
    return(
        <>
            <Helmet>
              <title>Past Projects</title>
            </Helmet>
            <MainContainer>
                <Topbar entries={TopbarEntriesFavSites}/>
                <PageContents>
                    <Words>
                        <h2>Past Projects</h2>
                        <ToggleDiv header="Farming Turtle AI" tooltip="Click on heading to show project contents!">
                            <ul>
                                <li>
                                    Are you obsessed with automation like I am? So what if I told you that you could automate
                                    farming in Minecraft? Look no further! (If you want the nuts and bolts, skip to the third paragraph) 
                                    I've been playing Minecraft since I was a wee young lad and Modded Minecraft ever since I discovered this YouTuber named PopularMMOs (yes I was a kid when PopularMMOs was in his heyday). 
                                    I'm a huge fan of Factorio, so here recently, and when I say recently, more like in the last five years (basically when early access Factorio came out), 
                                    I put together a modpack termed "Acer's Tiered Minefactory" (forked from my previous pack named "Acer's Fantasy World Arena"),
                                    which I have since restructured into a REVAMED version for 1.12.2 named "Acer's Tiered Minefactory Revamped".
                                    The original modpack, "Acer's Fantasy World Arena", was actually used in a server I hosted during my highschool years.
                                    The modpack was a large conglomeration of magic and "tech" mods, Blood Magic, Thaumcraft, Mekanism, Computer Craft, Industrial Craft 2, 
                                    and Galacticraft to name a few. At the height of the server, I had around 4 to 6 people playing at a time. Many of my
                                    close friends would in fact remember playing on this modded server because I had created an installer for them to configure
                                    their Minecraft installations for the server. At its height one of the players had a massive Blood Magic circle that
                                    was causing many problems during the playthrough (kek). Anywho, the main premise for the "Fantasy World Arena" was to pose a magic vs tech 
                                    scenario. My main goal was to progress through enough technological innovation to make it to space and dominate the
                                    server with machines. Of course, magic actually won this one unfortunately. A particular blood magic user (COUGH) got so powerful with the voodoo crap the
                                    server eventually became unplayable for us techians (lol). This all ocurred over the span of 6 months. Ever since, I've never really lost the
                                    Modded Minecraft bug. Factorio is great, but something about playing what is essentially Factorio in Minecraft gets me going. So yes,
                                    I've been playing modded Minecraft like this for probably 8 years now. It's been a great pastime to unwind and set the weeks, years, all of life's problems aside.
                                    <br/>
                                    <br/>
                                    I know this is a long winded answer to describe what this project is and why I undertook it. In fact, I still work on this project to this very day.
                                    But essentially, I created the Farmbot AI a few years ago to farm potatoes and "hemp" (not weed) plants for Immersive Engineering biodiesel production.
                                    The production of these bots would contribute to the sustenance of me (the player), since I eventually expanded the bot's manageable farming library, and it would additionally
                                    allow for automated farming and power production. This would contribute wholly to progression through each tecnologically innovative tier until the space
                                    tier was reached. Believe it or not, I have yet to actually progress through a <i>survival</i> playthrough of the current modpack and make it to space.
                                    It is in theory possible as I have tested it many times in Creative, but survival playthroughs of this modpack are incredibly time consuming. What would take around
                                    15 minutes to set up as a "factory" in Factorio could take upwards of several hours in Minecraft. It took me roughly 20 hours to build and launch a rocket in Factorio.
                                    And that by no means is ground breaking. You can imagine how long the process of building a rocket, now with the mod "Advanced Rocketry", would take in Minecraft
                                    with the amount of intermediary steps I have set up with this modpack.
                                    <br/>
                                    <br/>
                                    Anyways, enough with the babbling. At this point, Computer Craft is no longer a supported mod (as of 1.12.2). So this was all coded using CC:Tweaked, a fork of Computer Craft, 
                                    which itself provides a Lua Script api interface for "Turtles" which can be programmatically controlled. OpenComputers was another mod (which is included in the current pack)
                                    that could do the same; however, I chose to develop using CC:Tweaked due to the lower resource cost in constructing a Turtle in CC:Tweaked vs OpenComputers. Essentially,
                                    you configure the program within a CC:Tweaked farming turtle with the farm plot bounds and the bot/program takes care of the rest, provided it has a supply of fuel in its
                                    origin chest. This program is not advanced by any means really. The statement "AI" is more of an allure in stating the program is self sustaining. In fact, a recent addition I've 
                                    worked on is batch configuration and control using wireless networking by means of a command computer. I have also given the program the ability to save and resume states. 
                                    I'll include pictures of this project below. I have been on the fence on whether this should be a project I highlight on GitHub. This has been more of a personal endeavor 
                                    for a one-off modded Minecraft playthrough that I have yet to complete. I don't think many others would find use of this program other than me, but I could be wrong. Thanks for
                                    reading if you read all of this :P.
                                    <br/>
                                    <br/>
                                    <p>Image of Turtle Console:</p>
                                    <PageImg src="/images/Pic_Of_Console.png" alt="Picture of farming turtle AI program console."/>
                                    <br/>
                                    <p>Image of Turtle farming Potatoes:</p>
                                    <PageImg src="/images/2023-03-31_22.22.06_2.png" alt="Picture of running turtle farming potatoes after configuring program."/>
                                </li>
                            </ul>
                        </ToggleDiv>
                        <ToggleDiv header="SAM L11 TrustZone LED Flashing" tooltip="Click on heading to show project contents!">
                            <ul>
                                <li>
                                    This project took just about 10 minutes to do. I got an LED to flash using peripherals on a dev board which were
                                    securely configured using ARM's hardware security isolation extension called the TrustZone. The TrustZone
                                    is basically a separate region of memory within the SAM L11 microcontroller that could only be accessed
                                    with the appropriate user privileges (though it's not really "user privileges", devices and programs could
                                    be initialized in this region of memory). Link to project below.
                                </li>
                                <li>
                                    Link: <a href="https://github.com/jh-1607/LEDBlinkTrustZone" target="blank" rel="noopener noreferrer">LEDBlinkTrustZone</a>
                                </li>
                            </ul>
                        </ToggleDiv>
                        <ToggleDiv header="VulDetect" tooltip="Click on heading to show project contents!">
                            <ul>
                                <li>
                                    This project was a research project I worked on during my academic tenure as a research assistant.
                                    It never really reached a "finished state", but the proof of concept did. Essentially, the application 
                                    (written in Python) aims to visually identify individuals introducing vulnerabilies into github repositories. 
                                    The end goal for the project was to provide insight to the user the commonalities between all individuals contributing 
                                    to a repository that were introducing vulnerabilities. The application used the DeepWalk algorithm to produce clusterings
                                    with these insights. I'll link the project below for more info. (Don't think much has occurred with it since I was an RA) 
                                </li>
                                <li>Link: <a href="https://github.com/nexus-lab/vul-detect" target="_blank" rel="noopener noreferrer">nexus-lab/vul-detect</a></li>
                            </ul>
                        </ToggleDiv>
                        <ToggleDiv header="2003 Toyota Tundra Rebuild" tooltip="Click on heading to show project contents!">
                            <ul>
                                <li>
                                    Right after Halloween of 2024, my OG 2003 Toyota Tundra with 500+ thousand miles on it decided to drop a valve. I bought the truck in January of that year 
                                    as a supremely cheap means of transporting tools and materials for backyard projects. Most normal people when their vehicle gives out would give it to a mechanic,
                                    get a quote, and after seeing the price tag on the work involved, throw the towel in and sell the vehicle for scrap where it will get crushed and turned into bean cans and 
                                    Nissan Sentras. Of course, I'm not a normal person. In hindsight, I probably shouldn't have bought a 500+ thousand mile vehicle. But the price was right and I had the confidence 
                                    and know-how to fix whatever could happen. So you know.. Heh... 
                                    <br/>
                                    <br/>
                                    The truck when I got it had a slipping transmission, so I knew that had to get fixed. When the engine crapped the bag, THAT made things far worse. Having watched 
                                    countless hours over several years of Vice Grip Garage, This N That Garage, Pole Barn Garage, Pine Hollow Auto Diagnostics, and the South Main Auto Channel (and having read every Haynes Techbook I could get my hands on), 
                                    I decided I would embark on a full rebuild of the drivetrain. 
                                    I mean, "What's the worse that could happen?", I thought. I only had somewhere around 5,000 dollars to lose and that would be WAY better than buying a new truck right? Yes, but of course the big 
                                    trade-offs here were TIME and a whole lot of stress. It took a grand total of eight months to get the truck back into a roadworthy condition. The drivetrain sat for one month after it was pulled.
                                    Another five was spent waiting on the transmission rebuilders who struggled to get parts and staffing to complete the job for the A340E transmission. And two months were spent by myself rebuilding the engine, the 5VZFE. 
                                    Overall the parts required for the rebuild were not terribly expensive. I spent probably around 800 dollars on brand new heads and 400 ish on pistons and rings. You might ask,
                                    "Where did you get the parts?". Well, none other than the finest quality imported parts from Ebay, LOL (with the exception of the bearings, went with King bearings for the main and rod bearings)! And that proved to be a major challenge.
                                    <br/>
                                    <br/>
                                    In one of the pictures below, you may notice one of the pistons (specifically on the left hand bank) does not look like the others. I followed the factory specifications to the tee on this rebuild.
                                    So that means, when I received the parts, I took my micrometer out (which totally wasn't digital calipers because I don't have a micrometer, feeler gauges for rings) and measured each part (cylinders, wrist pins, bearings, and rings) to ensure they were within the standard dimensions/specifications listed in the Factory Service Manual.
                                    Now I'm no machine shop, so there was no grinding of the crank or boring the cylinders out '30 over. I honed the cylinders out, measured the bore with a dial bore indicator and ensured clearances were in spec as best to my ability. 
                                    Everything was as accurate as I could get it with the tools I had and the parts I got. One cylinder in particular had a 1 stamped on the head, which means it's smaller than the others.
                                    And one of the new pistons (which I was not exactly stoked about the quality of pistons and rings I got "new" from the Ebay special) was slightly out of round. It would not fit in that cylinder (cylinder number six). And I did not want to buy a new piston just for that one cylinder, and seeing the fact that one new piston
                                    was severely out of round, I probably didn't want to play musical chairs swapping it around cylinders. So, I had to REUSE the OEM piston for number six, which honestly is probably more trustworthy to use with the exception of the rings. That had me fairly stressed on whether the engine was going to have good compression when I put the heads back on. And whether it would run 
                                    and STAY running once the engine was back in the truck. Thankfully, each cylinder came out to around 175 psi after the rebuild, and after a week of driving, the engine has been running strong and quietly!
                                    <br/>
                                    <br/>
                                    Looking back, the project was far more of an effort that I thought it would be. I did manage to stay in budget, and if anything, spent more on acquiring the right tools
                                    to get the job done. Most of the struggle was getting the drivetrain out of the truck and back into it. And of course rebuilding the engine. It took a lot of patience and perseverance.
                                    But now, being on the other end of the project, every ounce of struggle was completely worth it. I now have a very capable truck that will be more than what I really
                                    need out of it, that will last a long time and doesn't cost a fortune to keep on the road. They certainly don't make trucks like this Tundra anymore, and probably the nicest thing about it is
                                    it doesn't have a fat long-term loan payment attached to it :).
                                </li>
                            </ul>
                            <ImageCarousel images={TruckImages}/>
                        </ToggleDiv>
                    </Words>
                </PageContents>
            </MainContainer>
        </>
    )
}
