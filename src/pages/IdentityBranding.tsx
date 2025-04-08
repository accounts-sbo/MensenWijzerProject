
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceDetail from '@/components/ServiceDetail';

const IdentityBranding = () => {
  return (
    <div className="min-h-screen bg-mensen-white">
      <Header />
      <div className="pt-24 md:pt-28">
        <ServiceDetail 
          title="Identiteit & Merkontwikkeling"
          subtitle="Diensten"
          description="Sterke communicatie begint met een helder verhaal. Ik help je jouw identiteit scherp te krijgen en krachtig neer te zetten."
          imageSrc="/lovable-uploads/40f15ae1-975c-4b0d-a46d-cadf7319bd83.png"
        />
      </div>
      <Footer />
    </div>
  );
};

export default IdentityBranding;
