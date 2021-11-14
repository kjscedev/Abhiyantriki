import TextAndButton from "../components/TextAndButton/TextAndButton";
import TwinkleTwinkle from "../components/TwinkleTwinkle/TwinkleTwinkle";
import "./Parvaah.css";

interface ParvaahProps {}

const Parvaah = ({}: ParvaahProps) => {
  return (
    <div>
      <div className="container mb-5">
        <div className="col">
          {/* <TwinkleTwinkle title="Parvaah" /> */}
          <img
            src={process.env.PUBLIC_URL + "/assets/gifs/parvaah.gif"}
            className="parvaah-title"
            alt=""
          />

          <div className="d-flex justify-content-around align-items-center text-center mb-5 parvaah">
            <img
              src={process.env.PUBLIC_URL + "/assets/logos/Parvaah Logo.png"}
              alt=""
              className="parvaah logo"
            />
            <div className="vl"></div>
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/logos/Sustainable Reality logo.png"
              }
              alt=""
              className="parvaah logo"
            />
          </div>

          <TextAndButton
            paraText="Parvaah, the social wing of K.J Somaiya College of Engineering works
            towards the social causes of the society and improving the
            conditions of the less privileged. Team Parvaah, through its various
            initiatives, has been striving to spread maximum social awareness in
            the community."
            buttonText="Volunteer"
            buttonHref="https://forms.gle/7PKJTegXqKkcPth59"
          />
        </div>
      </div>

      <div>
        {/* 2019 Parvaah Events */}

        {/* <!-- image right text left --> */}
        <div className="container p-3 text-white">
          <div className="row">
            <div className="col-sm-6 col-md-6 flex-column d-flex justify-content-center order-md-2">
              <div className="d-flex flex-column mb-3">
                <div className="fs-3 fw-bold text-left p-titles">Eco Run (2019)</div>
                <div
                  className="align-items-center d-flex justify-content-center flex-column mb-3"
                  style={{ fontSize: 15, fontFamily: "Roboto" }}
                >
                  With The Three-Year-Long Cause Of Zero-Waste Community,
                  Parvaah Organised A ‘Parvaah Eco Run’ Which Advocated The
                  Importance Of Walking To Reduce The Global Carbon Footprint.
                  We Decided To Go An Extra Mile Working Towards A Cause With
                  Passion, Dedication And Panache.
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 order-md-1">
              <div
                style={{
                  marginTop: 30,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{ width: "50%" }}
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/Parvaah/ecorun_2019.png"
                  }
                  alt="Beach Clean-up"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- image left text right --> */}
        <div className="container p-3 text-white">
          <div className="row">
            <div className="col-sm-6 col-md-6 flex-column d-flex justify-content-center">
              <div className="d-flex flex-column mb-3">
                <div className="fs-3 fw-bold text-left p-titles">
                  Signal Shala (2019)
                </div>
                <div
                  className="align-items-center d-flex justify-content-center flex-column mb-3"
                  style={{ fontSize: 15, fontFamily: "Roboto" }}
                >
                  Parvaah Collaborated With Signal Shala To Spread Awareness
                  Regarding The Importance Of 5R’s (Reduce, Reuse, Recycle, Rot,
                  Refuse). With Its Motto To Create A Zero-Waste Community,
                  Parvaah Has Been Constantly Promoting The Necessity Of
                  Reducing The Generation Of Waste.
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div
                style={{
                  marginTop: "30",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{ width: "50%" }}
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/Parvaah/Signal_Shala_2019.png"
                  }
                  alt="Beach Clean-up"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- image right text left --> */}
        <div className="container p-3 text-white">
          <div className="row">
            <div className="col-sm-6 col-md-6 flex-column d-flex justify-content-center order-md-2">
              <div className="d-flex flex-column mb-3">
                <div className="fs-3 fw-bold text-left p-titles">
                  Secret Santa (2019)
                </div>
                <div
                  className="align-items-center d-flex justify-content-center flex-column mb-3"
                  style={{ fontSize: 15, fontFamily: "Roboto" }}
                >
                  What Is A Christmas Celebration Without A Secret Santa? Team
                  Parvaah Visited The Desire Society, A Community Of HIV
                  Positive Children. The Kids Here Are Provided With Care And
                  Education By An NGO. The Team Members Helped The Children
                  Decorate Christmas Trees And Later Santa Distributed Gifts
                  Among Them.
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 order-md-1">
              <div
                style={{
                  marginTop: 30,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{ width: "50%" }}
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/Parvaah/Secret_Santa_2019.png"
                  }
                  alt="Beach Clean-up"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- image left text right --> */}
        <div className="container p-3 text-white">
          <div className="row">
            <div className="col-sm-6 col-md-6 flex-column d-flex justify-content-center">
              <div className="d-flex flex-column mb-3">
                <div className="fs-3 fw-bold text-left p-titles">
                  Diwali Donation Drive (2019)
                </div>
                <div
                  className="align-items-center d-flex justify-content-center flex-column mb-3"
                  style={{ fontSize: 15, fontFamily: "Roboto" }}
                >
                  The Festival Of Lights Brings With It Happiness And Joy. Team
                  Parvaah Associated With The Maher Neev Orphanage And Spread
                  Smiles On The Little Faces. There Is Always A Sense Of
                  Contentment In Giving And We Experienced A Complete Bliss
                  Being Able To Spend Some Time With The Children.
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div
                style={{
                  marginTop: "30",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{ width: "50%" }}
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/Parvaah/Diwali_Donation_2019.png"
                  }
                  alt="Beach Clean-up"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- image right text left --> */}
        <div className="container p-3 text-white">
          <div className="row">
            <div className="col-sm-6 col-md-6 flex-column d-flex justify-content-center order-md-2">
              <div className="d-flex flex-column mb-3">
                <div className="fs-3 fw-bold text-left p-titles">
                  Tree Plantation Drive (2019)
                </div>
                <div
                  className="align-items-center d-flex justify-content-center flex-column mb-3"
                  style={{ fontSize: 15, fontFamily: "Roboto" }}
                >
                  With Our Environment On The Verge Of Being Knocked Down By
                  Humans, Woodlands Are The Only Thing That Can Cushion Our
                  Habitat. As They Say “The Best Time To Plant A Tree Was 20
                  Years Ago And The Second-Best Time Is Now”, Abiding By The
                  Same, Parvaah Conducted A Tree Plantation Drive.
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 order-md-1">
              <div
                style={{
                  marginTop: 30,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{ width: "50%" }}
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/Parvaah/tree_plantation_2019.png"
                  }
                  alt="Beach Clean-up"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 2020 Parvaah Events */}

        <div className="container p-3 text-white">
          <div className="row">
            <div className="col-sm-6 col-md-6 flex-column d-flex justify-content-center">
              <div className="d-flex flex-column mb-3">
                <div className="fs-3 fw-bold text-left p-titles">
                  Know Your Plastic (2020)
                </div>
                <div
                  className="align-items-center d-flex justify-content-center flex-column mb-3"
                  style={{ fontSize: 15, fontFamily: "Roboto" }}
                >
                  Parvaah believes that a zero-waste community can only be built with novel, outside-the-box ideas put forth by the young minds of our society. With ‘Know your Plastic’, Parvaah reached out to various schools and interacted with students to spread awareness about the harmful effects of plastic on our environment and usable healthier alternatives.
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div
                style={{
                  marginTop: "30",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{ width: "50%" }}
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/Parvaah/Know_your_plastic_2020.png"
                  }
                  alt="Beach Clean-up"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- image right text left --> */}
        <div className="container p-3 text-white">
          <div className="row">
            <div className="col-sm-6 col-md-6 flex-column d-flex justify-content-center order-md-2">
              <div className="d-flex flex-column mb-3">
                <div className="fs-3 fw-bold text-left p-titles">
                  Beautification Drive (2020)
                </div>
                <div
                  className="align-items-center d-flex justify-content-center flex-column mb-3"
                  style={{ fontSize: 15, fontFamily: "Roboto" }}
                >
                  With the aim of creating elegant surroundings and thanking frontline workers, Parvaah organised a beautification drive at the Matunga station road. The walls were painted with art that signified the huge role they played in the pandemic.
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 order-md-1">
              <div
                style={{
                  marginTop: 30,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{ width: "50%" }}
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/Parvaah/Beautification_2020.png"
                  }
                  alt="Beach Clean-up"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container p-3 text-white">
          <div className="row">
            <div className="col-sm-6 col-md-6 flex-column d-flex justify-content-center">
              <div className="d-flex flex-column mb-3">
                <div className="fs-3 fw-bold text-left p-titles">
                  Diwali Donation Drive (2020)
                </div>
                <div
                  className="align-items-center d-flex justify-content-center flex-column mb-3"
                  style={{ fontSize: 15, fontFamily: "Roboto" }}
                >
                  Happiness, when shared, is doubled! Team Parvaah brought smiles to little children with their visit to the orphanage at Diwali. Sweets, laughter and immense joy were exchanged and touching memories were made!
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div
                style={{
                  marginTop: "30",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{ width: "50%" }}
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/Parvaah/Diwali_Donation_2020.png"
                  }
                  alt="Beach Clean-up"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- image right text left --> */}
        <div className="container p-3 text-white">
          <div className="row">
            <div className="col-sm-6 col-md-6 flex-column d-flex justify-content-center order-md-2">
              <div className="d-flex flex-column mb-3">
                <div className="fs-3 fw-bold text-left p-titles">
                  Mangrove Clean-Up (2020)
                </div>
                <div
                  className="align-items-center d-flex justify-content-center flex-column mb-3"
                  style={{ fontSize: 15, fontFamily: "Roboto" }}
                >
                 Parvaah, following its motto of building a zero-waste community, assisted in cleaning the Mangrove patches in Navi Mumbai. The Mangrove clean up at Airoli, helped Parvaah move towards its goal of making the city cleaner and healthier through collective action.
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 order-md-1">
              <div
                style={{
                  marginTop: 30,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{ width: "50%" }}
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/Parvaah/Mangrove_clean_up_2020.png"
                  }
                  alt="Beach Clean-up"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parvaah;
