//display alerts if there are any
import React, { Fragment } from "react";
import { useSelector } from "react-redux";

//grab alerts from alerts state
const Alert = () => {
  const alerts = useSelector((state) => state.alert);

  return (
    <Fragment>
      {alerts !== null &&
        alerts.length > 0 &&
        alerts.map((alert) => (
          <div key={alert.id} className={`alert`}>
            {alert.msg}
          </div>
        ))}
    </Fragment>
  );
};

export default Alert;
