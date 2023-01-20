export default function Blog() {
  return (
    <>
      <div
        className="header"
        style={{
          backgroundColor: "grey",
          textAlign: "left",
          color: "white",
          display: "grid",
          height: "100",
        }}
      >
        <h1
          className="font-weight-bold mt-5 mb-5"
          style={{
            fontSize: "50px",
            fontWeight: "bold",
            marginLeft: "30px",
          }}
        >
          IDEAS WORTH SPREADING
        </h1>

        <p
          className="mb-5"
          style={{
            fontSize: "30px",
            fontStyle: "italic",
            marginLeft: "30px",
          }}
        >
          Le idee per cambiare il mondo
        </p>
      </div>
    </>
  );
}
