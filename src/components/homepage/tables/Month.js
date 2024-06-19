import React from "react";
import Table from "./Table";
import TableItem from "./TableItem";

function Month({ className }) {
  return (
    <div className={`tables__content ${className}`}>
      <div className={`tables__wrapper`}>
        <h4 className="tables__table-title">TOP GAIN</h4>

        <Table>
          <TableItem
            to="#"
            image="image3.png"
            imageS="image3-s.png"
            abbreviation="GHST"
            title={"Aavegotchi"}
            high={"8.49%"}
            price="$1.89"
            volume="45.2M"
          />
          <TableItem
            to="#"
            image="image3.png"
            imageS="image3-s.png"
            abbreviation="GHST"
            title={"Aavegotchi"}
            high={"8.49%"}
            price="$1.89"
            volume="45.2M"
          />
          <TableItem
            to="#"
            image="image3.png"
            imageS="image3-s.png"
            abbreviation="GHST"
            title={"Aavegotchi"}
            high={"8.49%"}
            price="$1.89"
            volume="45.2M"
          />
          <TableItem
            to="#"
            image="image3.png"
            imageS="image3-s.png"
            abbreviation="GHST"
            title={"Aavegotchi"}
            high={"8.49%"}
            price="$1.89"
            volume="45.2M"
          />
          <TableItem
            to="#"
            image="image3.png"
            imageS="image3-s.png"
            abbreviation="GHST"
            title={"Aavegotchi"}
            high={"8.49%"}
            price="$1.89"
            volume="45.2M"
          />
          <TableItem
            to="#"
            image="image3.png"
            imageS="image3-s.png"
            abbreviation="GHST"
            title={"Aavegotchi"}
            high={"8.49%"}
            price="$1.89"
            volume="45.2M"
          />
          <TableItem
            to="#"
            image="image3.png"
            imageS="image3-s.png"
            abbreviation="GHST"
            title={"Aavegotchi"}
            high={"8.49%"}
            price="$1.89"
            volume="45.2M"
          />
        </Table>
      </div>{" "}
      <div className="tables__wrapper">
        <h4 className="tables__table-title">TOP LOSE</h4>
        <Table>
          <TableItem
            to="#"
            image="image3.png"
            imageS="image3-s.png"
            abbreviation="GHST"
            title={"Aavegotchi"}
            lower={"8.49%"}
            price="$1.89"
            volume="45.2M"
          />
          <TableItem
            to="#"
            image="image3.png"
            imageS="image3-s.png"
            abbreviation="GHST"
            title={"Aavegotchi"}
            lower={"8.49%"}
            price="$1.89"
            volume="45.2M"
          />
          <TableItem
            to="#"
            image="image3.png"
            imageS="image3-s.png"
            abbreviation="GHST"
            title={"Aavegotchi"}
            lower={"8.49%"}
            price="$1.89"
            volume="45.2M"
          />
          <TableItem
            to="#"
            image="image3.png"
            imageS="image3-s.png"
            abbreviation="GHST"
            title={"Aavegotchi"}
            lower={"8.49%"}
            price="$1.89"
            volume="45.2M"
          />
          <TableItem
            to="#"
            image="image3.png"
            imageS="image3-s.png"
            abbreviation="GHST"
            title={"Aavegotchi"}
            lower={"8.49%"}
            price="$1.89"
            volume="45.2M"
          />
          <TableItem
            to="#"
            image="image3.png"
            imageS="image3-s.png"
            abbreviation="GHST"
            title={"Aavegotchi"}
            lower={"8.49%"}
            price="$1.89"
            volume="45.2M"
          />
          <TableItem
            to="#"
            image="image3.png"
            imageS="image3-s.png"
            abbreviation="GHST"
            title={"Aavegotchi"}
            lower={"8.49%"}
            price="$1.89"
            volume="45.2M"
          />
        </Table>
      </div>
    </div>
  );
}

export default Month;