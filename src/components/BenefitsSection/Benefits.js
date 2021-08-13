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
            <p className="bn-title">Increase Revenue More Than 20%</p>
            <div className="bn-list">
              <div className="bn-list-item">
                <TiTick size={25} opacity={0.7} />
                <p className="bn-list-text">Increased Table Turnover</p>
              </div>
              <div className="bn-list-item">
                <TiTick size={25} opacity={0.7} />
                <p className="bn-list-text">Increased Ticket Size</p>
              </div>
              <div className="bn-list-item">
                <TiTick size={25} opacity={0.7} />
                <p className="bn-list-text">Increased Tip Amounts</p>
              </div>
            </div>
          </div>
          <div className="bn-container">
            <img
              src="https://finedine.imgix.net/images/49c48f2c-87ec-4b44-8d2f-377cec0cb12c.png?auto=format&w=540&fit=max&dpr=2&auto=compress"
              alt="img.."
            />
            <p className="bn-title">Increase Revenue More Than 20%</p>
            <div className="bn-list">
              <div className="bn-list-item">
                <TiTick size={25} opacity={0.7} />
                <p className="bn-list-text">Increased Table Turnover</p>
              </div>
              <div className="bn-list-item">
                <TiTick size={25} opacity={0.7} />
                <p className="bn-list-text">Increased Ticket Size</p>
              </div>
              <div className="bn-list-item">
                <TiTick size={25} opacity={0.7} />
                <p className="bn-list-text">Increased Tip Amounts</p>
              </div>
            </div>
          </div>
          <div className="bn-container">
            <img
              src="https://finedine.imgix.net/images/49c48f2c-87ec-4b44-8d2f-377cec0cb12c.png?auto=format&w=540&fit=max&dpr=2&auto=compress"
              alt="img.."
              width="90%"
            />
            <p className="bn-title">Increase Revenue More Than 20%</p>
            <div className="bn-list">
              <div className="bn-list-item">
                <TiTick size={25} opacity={0.7} />
                <p className="bn-list-text">Increased Table Turnover</p>
              </div>
              <div className="bn-list-item">
                <TiTick size={25} opacity={0.7} />
                <p className="bn-list-text">Increased Ticket Size</p>
              </div>
              <div className="bn-list-item">
                <TiTick size={25} opacity={0.7} />
                <p className="bn-list-text">Increased Tip Amounts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
