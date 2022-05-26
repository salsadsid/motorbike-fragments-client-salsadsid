import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='bg-primary mb-16'>
            <h2 className='text-center text-4xl text-secondary font-bold pt-6'>Million Business Trust Us</h2>
            <div className="shadow w-full grid sm:grid-cols-1 lg:grid-cols-3 gap-2 my-5">

                <div className='flex flex-col justify-center items-center py-3 bg-secondary m-3 rounded-lg text-white'>
                    <div className="stat-figure text-4xl ">
                        <i className="fas fa-industry"></i>
                    </div>
                    <div className="stat-title">Market Size</div>
                    <div className="stat-value">$2M USD</div>
                    <div className="stat-desc">2010-2020</div>
                </div>

                <div className='flex flex-col justify-center items-center py-3 bg-secondary m-3 rounded-lg text-white'>
                    <div className="stat-figure text-white text-4xl">
                        <i className="fas fa-hand-holding-water"></i>
                    </div>
                    <div className="stat-title">Compacted Annual Growth</div>
                    <div className="stat-value">↗︎ 40%</div>
                    <div className="stat-desc">2015-2020</div>
                </div>

                <div className='flex flex-col justify-center items-center py-3 bg-secondary m-3 rounded-lg text-white'>
                    <div className="stat-figure text-white text-4xl">
                        <i className="fas fa-fire"></i>
                    </div>
                    <div className="stat-title">Penetration ratio</div>
                    <div className="stat-value">10/1000</div>
                    <div className="stat-desc">In Bangladesh</div>
                </div>

            </div>
            <h2 className='text-center text-3xl text-secondary font-bold pb-8'>For Details Give Us a Hello <button className="btn btn-lg btn-accent">Contact Us</button></h2>
        </div>
    );
};

export default BusinessSummary;