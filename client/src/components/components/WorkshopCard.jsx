import React from "react";
import "../../index.css";
import Button from "react-bootstrap/Button";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import global from "../../resources/global.json";

export default function WorkshopCard({
  titolo,
  organizer,
  tag,
  text,
  extra,
  imgSrc,
  data,
  luogo,
  ore,
  link,
  pubblico,
  setIsBioOpen,
  setSelectedWorkshopInfo,
}) {
  return (
    <div
      className="col-lg-4 col-md-6 col-sm-12"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={() => {
        setIsBioOpen(true);
        setSelectedWorkshopInfo({
          titolo: titolo,
          organizer: organizer,
          tag: tag,
          text: text,
          extra: extra,
          imgSrc: imgSrc,
          data: data,
          luogo: luogo,
          ore: ore,
          link: link,
          pubblico: pubblico,
        });
      }}
    >
      <Card
        className="mt-5 mb-2"
        style={{
          fontFamily: "GothamBold",
          border: "2px solid #5272b5",
          padding: "15px",
          borderRadius: "20px",
          height: "350px",
          width: "400px",
        }}
      >
        <Typography
          style={{
            fontWeight: "bold",
            color: global.COLORS.CELESTE,
            fontSize: "20px",
            textAlign: "center",
          }}
        >
          {titolo}
        </Typography>
        <CardHeader
          shadow={false}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{ height: "100px" }}
            src={`/images/workshop23/${imgSrc}`}
            alt={titolo}
          />
        </CardHeader>

        <CardBody>
          <Typography variant="lead" color="gray" className="mt-3 font-normal">
            Data: {data} <br /> Luogo: {luogo} <br /> Ore: {ore}
          </Typography>
        </CardBody>
        <CardFooter className="flex" style={{ textAlign: "center" }}>
          <Button
            className="font-normal"
            style={{
              color: "white",
              backgroundColor: global.COLORS.ROSSO_POSTER,
            }}
          >
            Prenota
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
