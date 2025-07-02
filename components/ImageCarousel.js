import styled from "styled-components";
import {useState} from "react";

const PageImg = styled.img`
    width: 90%;
    height: auto;
    margin: auto;
    z-index: 0;
    top: 5px;    
    padding: 7px 10px 10px 7px;
`;

export default function ImageCarousel({images}) {
    const [currentIndexTImg, setCurrentIndexTImg] = useState(0);

    const handleNextTImg = () => {  // Should probably create a component for image carousels at some point.
        setCurrentIndexTImg((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrevTImg = () => {
        setCurrentIndexTImg((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const {src, caption} = images[currentIndexTImg];

    return(
        <div className="image-carousel" style={{textAlign: "center" }}>
            <div style={{ position: "relative", margin: "0 auto" }}>
                <PageImg src={src} alt={caption}/>
            </div>
            {/* Caption */}
            <p>{caption}</p>
            {/* Controls */}
            <div style={{ marginTop: "20px" }}>
                <button onClick={handlePrevTImg} style={{ marginRight: "10px" }}>Previous Image</button>
                <button onClick={handleNextTImg}>Next Image</button>
            </div>
        </div>
    )
}

