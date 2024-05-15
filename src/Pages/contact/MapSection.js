import React from "react";

const MapSection = () => {
  return (
    <div className="map">
      <iframe
        className="w-100 h-100 border-0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31236.411059032405!2d75.3492632101403!3d11.866643604783054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba422b9b2aca753%3A0x380605a11ce24f6c!2sKannur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1715765073247!5m2!1sen!2sin"
        allowFullScreen=""
        title="Google Maps"
      ></iframe>
    </div>
  );
};

export default MapSection;
