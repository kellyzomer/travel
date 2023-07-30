import React from 'react';
import { VectorMap } from 'react-jvectormap';
import './App.css';
import { Link } from 'react-router-dom';

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jvectormap/2.0.4/jquery-jvectormap.css" type="text/css" media="screen"/>

const mapData = {
    FR: 8,
    DK: 2,
    ES: 9,
    DE: 4,
    HR: 2,
    AT: 2,
    GR: 2,
    TR: 3,
    PT: 2,
    BE: 4,
    IT: 4,
    PL: 2,
    GB: 3,
    SI: 1,
    AE: 1,
    TH: 1,
    MY: 1,
    HU: 1,
    CZ: 1,
    CU: 1,
    CN: 2,
    HK: 1,
    MO: 1,
    ID: 1,
    LV: 1,
    EE: 1,
    FI: 1,
    JO: 1,
    IL: 1,
    PS: 1,
    US: 1,
    CR: 1,
    PA: 1,
    CH: 1,
    AL: 1,
    KE: 1,
    SE: 1,
    NO: 1,
    NL: 99,
};

  // const handleClick = (e, countryCode) => {
  //   console.log(countryCode);
  // };

  const handleClick = (e, countryCode) => {
    console.log(countryCode);
    // Replace '/country' with the path you want to navigate to for each country
    // For example, you can use template literals to create dynamic paths based on the country code
    // Here's an example of the path format: `/country/${countryCode}`
    // Modify this line according to your desired route configuration
    window.location.href = `/country/${countryCode}`;
  };

  const Map = () => {
    return (
      <div>
        <VectorMap
          map={"world_mill"}
          backgroundColor='transparent'
          zoomOnScroll={true}
          containerStyle={{
            width: "100%",
            height: "520px"
          }}
          onRegionClick={handleClick} //gets the country code
          containerClassName="map"
          regionStyle={{
            initial: {
              fill: "#e4e4e4",
              "fill-opacity": 0.9,
              stroke: "none",
              "stroke-width": 0,
              "stroke-opacity": 0
            },
            hover: {
              "fill-opacity": 0.8,
              cursor: "pointer"
            },
            selected: {
              fill: "#2938bc" //color for the clicked country
            },
            selectedHover: {}
          }}
          regionsSelectable={false}
          series={{
            regions: [
              {
                values: mapData, 
                scale: ['#007d74'], 
                normalizeFunction: "polynomial"
              }
            ]
          }}
        />
      </div>
    );
  };

  export default Map;