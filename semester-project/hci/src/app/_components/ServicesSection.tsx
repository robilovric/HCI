import React from 'react';

const ServicesSection = () => {
  const containerStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    justifyContent: 'center', // Centers the containers
    margin: '0 auto', // Centers the entire grid horizontally
    maxWidth: '1200px', // Limits the maximum width of the containers
  };

  const mobileContainerStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '20px',
  };

  const cardContainerStyles = {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '8px',
  };

  const mobileCardStyles = {
    ...cardContainerStyles,
    width: '100%', // Adjust the card width for mobile
  };

  return (
    <div>
      <div className="text-black font-bold text-center text-2xl md:text-3xl lg:text-4xl mb-4">
        Services we provide
      </div>
      <div style={containerStyles}>
        <div style={{ ...mobileContainerStyles, ...{ '@media (max-width: 768px)': mobileContainerStyles } }}>
          <div style={cardContainerStyles}>
            <h3 style={{ marginBottom: '8px', fontWeight: 'bold' }}>Patient Management</h3>
            <p style={{ color: '#333' }}>We provide a secure and efficient way for doctors to manage their
              patient data, making it easy to access and update patient information anytime, anywhere.
            </p>
          </div>
          <div style={cardContainerStyles}>
            <h3 style={{ marginBottom: '8px', fontWeight: 'bold' }}>Online Appointments</h3>
            <p style={{ color: '#333' }}>We offer a hassle-free way for patients to schedule appointments with
              their doctors online, enabling them to avoid the long wait times and stress of traditional waiting rooms.
            </p>
          </div>
          <div style={cardContainerStyles}>
            <h3 style={{ marginBottom: '8px', fontWeight: 'bold' }}>Medical News</h3>
            <p style={{ color: '#333' }}>Stay informed and up-to-date with the latest news and trends in the medical
              and lifestyle world, with our comprehensive medical news service.
            </p>
          </div>
          <div style={{ ...cardContainerStyles, ...mobileCardStyles }}>
            <h3 style={{ marginBottom: '8px', fontWeight: 'bold' }}>Telemedicine</h3>
            <p style={{ color: '#333' }}>Our telemedicine service enables patients to receive virtual consultations
              from their doctors, providing a convenient way to access healthcare from the comfort of their homes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
