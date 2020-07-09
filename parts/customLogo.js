import React from 'react';

const customLogo = () => (
  <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="logo"><path d="M21.026 36h7.978-.034L35 22.936V36h7V8.258L34.604 5h-.015l-.023.023-9.479 21.994-9.685-21.96L8 8.27v29.185-.002L15.593 45H42v-7H16V22.936z"/></svg>
    <style jsx>{`
      .logo {
        width: 40px !important;
        height: 40px !important;
      }
      @media (max-width: 31.9375em) {
        .logo {
          margin-top: -10px !important;
        }
      }
    `}</style>
  </>
);

export default customLogo;