import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TrainingHero from '@/components/training/TrainingHero';
import TrainingContent from '@/components/training/TrainingContent';
import TrainingBenefits from '@/components/training/TrainingBenefits';
import TrainingInvestment from '@/components/training/TrainingInvestment';
import TrainingForm from '@/components/training/TrainingForm';

const TrainingPage = () => {
  return (
    <div className="min-h-screen bg-mensen-white">
      <Header />
      <TrainingHero />
      <TrainingContent />
      <TrainingBenefits />
      <TrainingInvestment />
      <TrainingForm />
      <Footer />
    </div>
  );
};

export default TrainingPage;

