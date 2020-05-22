import React from "react";
import { Link } from "@reach/router";

export default function BlockList(props) {
  return (
    <>
      <ol className="blockListOL">
        <Link to="/blocks/fun">
          <li className="blockButton">FUND</li>
        </Link>
        <Link to="/blocks/be">
          <li className="blockButton">BE</li>
        </Link>
        <Link to="/blocks/fe">
          <li className="blockButton">FE</li>
        </Link>
        <Link to="/blocks/proj">
          <li className="blockButton">PROJ</li>
        </Link>
      </ol>
    </>
  );
}
