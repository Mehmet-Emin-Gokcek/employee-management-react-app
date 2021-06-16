import React, { Fragment } from "react";
class AppFooter extends React.Component {
  render() {
    return (
      <Fragment>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <hr
            className="featurette-divider"
            style={{ width: "85%", marginTop: "2%" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <footer style={{ marginTop: "2%" }}>
            <p>Copyright © Employee Management Systems 2021</p>
          </footer>
        </div>
      </Fragment>
    );
  }
}
export default AppFooter;
