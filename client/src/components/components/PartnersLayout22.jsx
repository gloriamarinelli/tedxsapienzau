import PartnerCard22 from "../components/PartnerCard22";

export default function PartnersLayout22() {
  return (
    <section className="page-section" id="portfolio">
      <div className="container">
        <div>
          <h2
            className="section-heading"
            style={{
              fontFamily: "Fira Sans Extra Condensed, sans-serif",
              fontSize: "2.5em",
              color: "white",
            }}
          >
            Partner Istituzionali
          </h2>
        </div>
        <div className="row">
          <PartnerCard22
            imgSrc="https://italy.representation.ec.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2021-04/logo_ce-it-rvb-hr.png?itok=n0KlJmYq"
            sponsorType={"institutional"}
          />
          <PartnerCard22
            imgSrc="https://www.melogranoroma.org/wp-content/uploads/2019/03/logo-REGIONE-LAZIO.png"
            sponsorType={"institutional"}
          />
          <PartnerCard22
            imgSrc="https://www.astronomitaly.com/wp-content/uploads/2015/10/Roma-capitale.jpg"
            sponsorType={"institutional"}
          />
        </div>

        <h2
          className="section-heading"
          style={{
            fontFamily: "Fira Sans Extra Condensed, sans-serif",
            fontSize: "2.5em",
            color: "white",
          }}
        >
          Main Sponsors
        </h2>
        <div className="row">
          <PartnerCard22
            imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Unicredit_logo.svg/2560px-Unicredit_logo.svg.png"
            sponsorType={"main"}
          />

          <PartnerCard22
            imgSrc="https://www.fondazioneania.it/images/loghi/logo.png"
            sponsorType={"main"}
          />
        </div>

        <h2
          className="section-heading mb-3"
          style={{
            fontFamily: "Fira Sans Extra Condensed, sans-serif",
            fontSize: "2em",
            color: "white",
          }}
        >
          Supporting Sponsors
        </h2>
        <div className="row">
          <PartnerCard22
            imgSrc="https://www.piodaimaging.it/wp-content/uploads/2021/12/favicon.png"
            sponsorType={"supporting"}
          />
          <PartnerCard22
            imgSrc="https://www.smau.it/Imported/PartnerProfile/image-thumb__5951__partner-show-image/Ferrovie_dello_Stato_Italiane_32880.jpeg"
            sponsorType={"supporting"}
          />
          <PartnerCard22
            imgSrc="https://assets-global.website-files.com/6340630bc206e3e9f1770198/6340630bc206e33cf777029f_Logo-unobravo.png"
            sponsorType={"supporting"}
          />
          <PartnerCard22
            imgSrc="https://www.autocentribalduina.com/media/osvdbcml/ab-autocentri-balduina.jpg"
            sponsorType={"supporting"}
          />
        </div>

        <h2
          className="section-heading"
          style={{
            fontFamily: "Fira Sans Extra Condensed, sans-serif",
            fontSize: "2em",
            color: "white",
          }}
        >
          Smart Sponsor
        </h2>
        <div className="row">
          <PartnerCard22
            imgSrc="https://cdn.shopify.com/s/files/1/0084/4696/7889/products/logo_scritta_nera_scontornato_0a7bd0ae-a45f-4a0c-8f70-a29ecd08284a_620x.png?v=1654963814"
            sponsorType={"smart"}
          />
          <PartnerCard22
            imgSrc="https://cosebellecoserare.com/wp-content/uploads/2020/12/Logo-Home-Colorato.png"
            sponsorType={"smart"}
          />
          <PartnerCard22
            imgSrc="https://www.essenzialeseta.com/wp-content/uploads/2021/04/cropped-Logo-bordo-150px-1.png"
            sponsorType={"smart"}
          />
        </div>

        <h2
          className="section-heading"
          style={{
            fontFamily: "Fira Sans Extra Condensed, sans-serif",
            fontSize: "2em",
            color: "white",
          }}
        >
          Friendly Sponsor
        </h2>
        <div className="row">
          <PartnerCard22
            imgSrc="https://cdn.shopify.com/s/files/1/0267/7194/7575/files/queesy-logo-header_1350x.png?v=1618655220"
            sponsorType={"friendly"}
          />
          <PartnerCard22
            imgSrc="https://loghi-famosi.com/wp-content/uploads/2020/11/Red-Bull-Logo.png"
            sponsorType={"friendly"}
          />
          <PartnerCard22
            imgSrc="https://i0.wp.com/newsfood.com/wp-content/uploads/2009/07/17/20090717154415-bf0acfdc.jpg?fit=800%2C600&ssl=1"
            sponsorType={"friendly"}
          />
          <PartnerCard22
            imgSrc="https://steccolecco.com/wp-content/uploads/2019/06/logo-233x300.png"
            sponsorType={"friendly"}
          />
          <PartnerCard22
            imgSrc="https://techprincess.it/wp-content/uploads/2022/02/Save-the-Waste-2.jpg"
            sponsorType={"friendly"}
          />
          <PartnerCard22
            imgSrc="https://www.startup-turismo.it/wp-content/uploads/2022/06/logo-14.png"
            linkSite="https://www.u2y.io/"
            sponsorType={"friendly"}
          />
          <PartnerCard22
            imgSrc="https://uqrmecdn.s3.us-east-2.amazonaws.com/u/314241/701532-1237158219cc6b3f47dd0f4c6d417df04ef0cd4.jpg"
            sponsorType={"friendly"}
          />
        </div>
      </div>
    </section>
  );
}
