import React from 'react'
import Heading from './../../Common/Heading';
import RecentCard from './RecentCard';
import './Recent.css'

const Recent = () => {
  return (
    <>
      <section className="recent padding">
        <div className="container">
          <Heading
            title="Recent Property Listed"
            subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque iure accusantium corrupti, doloribus, rem quia dolores impedit, ipsum fugiat illum eveniet maxime esse delectus sequi recusandae facilis optio praesentium. Veritatis!"
          />
          <RecentCard />
        </div>
      </section>
    </>
  );
}

export default Recent