import React from "react";
import img from "/images/services.jpg";
import Back from "../Common/Back/Back";
import Featured from "../Home/Featured/Featured";


const Services = () => {
  return (
    <>
      <section className="services mb">
        <Back name="Services" title="Services -All Services" cover={img} />
        <div className="feacture">
          <Featured />
        </div>
      </section>
    </>
  );
};

export default Services;
