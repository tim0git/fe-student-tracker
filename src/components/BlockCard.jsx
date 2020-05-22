import React from "react";

export default function BlockCard(props) {
  const { name, number, slug } = props.block;
  return (
    <>
      <ul className="blockCardListUL">
        <li>Block:{name}</li>
        <li>ID:{number}</li>
        <li>Slug:{slug}</li>
      </ul>
    </>
  );
}
