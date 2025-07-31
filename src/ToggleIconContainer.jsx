import { useState } from "react";
import FeatherIcon from "feather-icons-react";

const ToggleIconContainer = () => {
  const [icon, setIcon] = useState("x");
  // Testing feather icon
  return (
    <div>
      <FeatherIcon icon={icon} />
      <ul>
        <li>
          <button onClick={() => setIcon("x")}>Make the Icon an X</button>
        </li>
        <li>
          <button onClick={() => setIcon("anchor")}>Make the Icon an Anchor</button>
        </li>
        <li>
          <button onClick={() => setIcon("box")}>Make the Icon a box</button>
        </li>
      </ul>
    </div>
  );
};
export default ToggleIconContainer;
