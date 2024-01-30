import React, { useState, useEffect } from 'react';
import Loading from './component/Loading';
import Navbar from './component/Navbar';
import BtnReturnTop from './component/BtnReturnTop';
import SectionHome from './component/SectionHome';
import SectionAbout from './component/SectionAbout';
import SectionCertificate from './component/SectionCertificate';
import SectionExperience from './component/SectionExperience';
import SectionProject from './component/SectionProject';
import Footer from './component/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <BtnReturnTop />
          <SectionHome />
          <SectionAbout />
          <SectionCertificate />
          <SectionExperience />
          <SectionProject />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
