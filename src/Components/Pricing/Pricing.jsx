import React from 'react'
import Back from '../Common/Back/Back'
import img from '/images/pricing.jpg'
import Price from '../Home/Price/Price';

const Pricing = () => {
  return (
    <>
      <div className="pricing mb">
        <Back
          name="30 days money back guarantee"
          title="No Extra Fees. Friendly Support"
          cover={img}
        />
        <div className="pricing">
          <Price />
        </div>
      </div>
    </>
  );
}

export default Pricing