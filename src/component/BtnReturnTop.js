import React,{useEffect} from 'react';

function BtnReturtnTop() {
    const handleReturnToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const scrollHandler = () => {
          const returnTopButton = document.querySelector('.btn-return-top');
    
          if (returnTopButton) {
            returnTopButton.classList.toggle('d-none', window.scrollY === 0);
          }
        };
    
        window.addEventListener('scroll', scrollHandler);
    
        return () => {
          window.removeEventListener('scroll', scrollHandler);
        };
      }, []);

    return(
        <>
            <button className="btn btn-outline btn-return-top d-none" onClick={handleReturnToTop}><i className="fa-solid fa-arrow-up"></i></button>
        </>
    )
}

export default BtnReturtnTop;