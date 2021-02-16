import React from "react";

const ImageboxComponent = (props) => {
  const { submit, name } = props;
  return (
    <React.Fragment>
      <img
        className={submit ? "dove-icon dove-icon-animated" : "dove-icon"}
        src="https://www.flaticon.com/svg/vstatic/svg/2142/2142843.svg?token=exp=1613483844~hmac=f4912f1e0d3b73af16dd99a80dc600cb"
        alt="dove"
      />
      {submit ? <p className="thank-you">Thank you, {name}</p> : null}
    </React.Fragment>
  );
};

export const Imagebox = ImageboxComponent;
