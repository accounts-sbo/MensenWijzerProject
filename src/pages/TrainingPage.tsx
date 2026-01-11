import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TrainingHero from '@/components/training/TrainingHero';
import TrainingContent from '@/components/training/TrainingContent';
import TrainingEnergyLevel from '@/components/training/TrainingEnergyLevel';
import TrainingIdentity from '@/components/training/TrainingIdentity';
import TrainingBenefits from '@/components/training/TrainingBenefits';
import TrainingInvestment from '@/components/training/TrainingInvestment';
import TrainingForm from '@/components/training/TrainingForm';

const TrainingPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-mensen-white">
      <Header />
      <TrainingHero />
      <TrainingContent />
      <TrainingEnergyLevel />
      <TrainingIdentity />
      <TrainingBenefits />
      <TrainingInvestment />
      <TrainingForm />
      <Footer />
    </div>
  );
};

export default TrainingPage;

