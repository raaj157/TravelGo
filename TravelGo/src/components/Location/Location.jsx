import React from 'react';

const Location = () => {
  return (
    <div>
      <div>
        <div className="container pb-10">
            <h1 className='inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl'>
            Location to visit</h1>
            <div className='rounded-xl'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224356.85923192592!2d77.23701088488971!3d28.522404036526268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1728295033596!5m2!1sen!2sin" 
            width="100%"
            height="360"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            style={{ borderRadius: "20px" }}
            ></iframe>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
