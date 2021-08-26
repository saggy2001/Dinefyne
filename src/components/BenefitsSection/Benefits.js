import { TiTick } from "react-icons/ti";
import "./Benefits.css";

const Benefits = () => {
  return (
    <div className="box-container">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontSize: "2rem",
            paddingBottom: "30px",
            fontWeight: "900",
          }}
        >
          Why Dinefyne ?
        </p>
        <div className="main-container">
          <div className="bn-container">
            <img
              src="https://finedine.imgix.net/images/49c48f2c-87ec-4b44-8d2f-377cec0cb12c.png?auto=format&w=540&fit=max&dpr=2&auto=compress"
              alt="img.."
            />
            <p className="bn-title">Gain More Control Over Your Business</p>
            <div className="bn-list">
              <div className="bn-list-item">
                <TiTick size={25} opacity={0.7} />
                <p className="bn-list-text">
                  Get Real-Time Data of Your customers
                </p>
              </div>
              <div className="bn-list-item">
                <TiTick size={25} opacity={0.7} />
                <p className="bn-list-text">
                  Data Analytics for Smarter Decisions to Grow and Expand Your
                  Restaurant
                </p>
              </div>
              <div className="bn-list-item">
                <TiTick size={25} opacity={0.7} />
                <p className="bn-list-text">Update the Menu with One Click</p>
              </div>
            </div>
          </div>
          <div className="bn-container">
            <img
              src="https://finedine.imgix.net/images/49c48f2c-87ec-4b44-8d2f-377cec0cb12c.png?auto=format&w=540&fit=max&dpr=2&auto=compress"
              alt="img.."
            />
            <p className="bn-title">Become super discoverable!</p>
            <div className="bn-list">
              <div className="bn-list-item">
                <TiTick size={25} opacity={0.7} />
                <p className="bn-list-text">
                  Customers can discover your Restaurant directly on Google Page
                </p>
              </div>
              <div className="bn-list-item">
                <TiTick size={25} opacity={0.7} />
                <p className="bn-list-text">Get Order from Anywhere</p>
              </div>
              <div className="bn-list-item">
                <TiTick size={25} opacity={0.7} />
                <p className="bn-list-text">
                  Get a Website and Increase the level of Your Brand in the
                  Market
                </p>
              </div>
            </div>
          </div>
          <div className="bn-container">
            <img
              src="https://finedine.imgix.net/images/49c48f2c-87ec-4b44-8d2f-377cec0cb12c.png?auto=format&w=540&fit=max&dpr=2&auto=compress"
              alt="img.."
              width="90%"
            />
            <p className="bn-title">Increase Revenue by 100%</p>
            <div className="bn-list">
              <div className="bn-list-item">
                <TiTick size={25} opacity={0.7} />
                <p className="bn-list-text">
                  Direct Customer Ownership and Increase Repeat Customer
                </p>
              </div>
              <div className="bn-list-item">
                <TiTick size={25} opacity={0.7} />
                <p className="bn-list-text">Real-Time Updates on Sales</p>
              </div>
              <div className="bn-list-item">
                <TiTick size={25} opacity={0.7} />
                <p className="bn-list-text">
                  Easy Monitoring of Daily Operations using Admin App and
                  Dashboard
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
