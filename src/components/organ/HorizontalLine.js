import React from 'react';

function HorizontalLine({ sectionTitle }) {
  let div = {
    margin: '.75rem .75rem',
  };
  let h2 = {
    width: '100%',
    textAlign: 'center',
    borderBottom: '3px solid #0f9d58',
    lineHeight: '0.1em',
    margin: '5px 0 10px',
  };
  let span = {
    fontSize: '25px',
    background: '#e6e9f0',
    padding: '0px 10px',
    color: '#4285f4',
    fontWeight: 'bold',
  };

  return (
    <div style={div}>
      <h2 style={h2}>
        <span style={span}>{sectionTitle}</span>
      </h2>
    </div>
  );
}

export default HorizontalLine;
