
const ServicesSection = () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
        <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px' }}>
        <h3 style={{ marginBottom: '8px', fontWeight: 'bold' }}>Patient Management</h3>
        <p style={{ color: '#333' }}>We provide a secure and efficient way for doctors to manage their
        patient data, making it easy to access and update patient information anytime, anywhere.
        </p>
        </div>
        <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px' }}>
        <h3 style={{ marginBottom: '8px', fontWeight: 'bold' }}>Online Appointments</h3>
        <p style={{ color: '#333' }}>We offer a hassle free way for patients to schedule appointments with
        their doctors online, enabling them to avoid the long wait times and stress of traditional waiting rooms.
        </p>
        </div>
        <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px' }}>
        <h3 style={{ marginBottom: '8px', fontWeight: 'bold' }}>Medical News</h3>
        <p style={{ color: '#333' }}>Stay informed and up-to-date with the latest news and trends in the medical
        and lifestyle world, with our comprehensive medical news service.
        </p>
        </div>
        <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px' }}>
        <h3 style={{ marginBottom: '8px', fontWeight: 'bold' }}>Telemedicine</h3>
        <p style={{ color: '#333' }}>Our telemedicine service enables patients to recieve virtual consultations
        from their doctors, providing a convenient way to access healthcare from the comfort of their homes.</p>
        </div>
  </div>
);

export default ServicesSection;