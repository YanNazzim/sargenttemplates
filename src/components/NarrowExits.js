import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./style/Stile.css";

// Device images
import narrowMortise from "../images/NarrowMortiseExit (8300).png";
import narrowCVR from "../images/NarrowCVR.png";
import narrowRim from "../images/Narrow Rim Exit (8500).png";
import narrowCVR9400 from "../images/narrowCVR 9400.png";
import narrowPE80Mortise from "../images/narrowPE80Mortise.png";
import narrowPECVR from "../images/narrowPECVR.png";
import narrowPERim from "../images/narrowPERim (PE8500).png";

// Define Narrow80, Narrow90, and PE80 devices
const narrow80Devices = [
  { id: "8300", name: "8300 N Mortise Exit", img: narrowMortise },
  { id: "MD8400", name: "MD8400 N CVR Exit", img: narrowCVR },
  { id: "AD8400", name: "AD8400 N CVR Exit", img: narrowCVR },
  { id: "8500", name: "8500 N Rim Exit", img: narrowRim },
  { id: "AD8500", name: "AD8500 N Rim Exit", img: narrowRim },
];

const narrowPE80Devices = [
  { id: "PE8300", name: "PE8300 Narrow Mortise Exit", img: narrowPE80Mortise },
  { id: "PE8400", name: "PE8400 Narrow CVR Exit", img: narrowPECVR },
  { id: "PE8500", name: "PE8500 Narrow Mortise Exit", img: narrowPERim },
];

const narrow90Devices = [
  { id: "9400", name: "9400 N CVR Exit", img: narrowCVR9400 },
];

function NarrowExits() {
  const navigate = useNavigate();
  const location = useLocation();
  const { series } = location.state || {}; // Get series from passed state

  // Determine the correct set of devices to display based on the series
  const devices =
    series === "90"
      ? narrow90Devices
      : series === "PE"
      ? narrowPE80Devices
      : narrow80Devices;

  const handleButtonClick = (id) => {
    navigate("/display-templates", {
      state: { category: "Exit Devices", series: `Narrow${series}`, id },
    });
  };

  return (
    <>
      <div className="stile-page">
        {devices.map((device) => (
          <button
            key={device.id}
            className="btn"
            onClick={() => handleButtonClick(device.id)}
          >
            <img src={device.img} alt={device.name} className="btn-image" />
            {device.name}
          </button>
        ))}
      </div>
    </>
  );
}

export default NarrowExits;
