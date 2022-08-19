import React from "react";
import Image from "next/image";

export const PageHeader = () => {

  const headerStyles={
    position: 'relative',
	  top: '0',
	  padding: '20px 1rem 20px 1rem',
	  color: '#fff',
	  backgroundColor: '#000',
	  display: 'grid',
	  placeItems: 'center',
	  borderBottom: '3px solid rgb(0, 204, 255)',
  }

  return (
    <>
      <header style={headerStyles}>
        <div>
          <Image width={160} height={80} src="/images/logo.jpg" alt="logotype"></Image>
        </div>
      </header>
    </>
  );
};