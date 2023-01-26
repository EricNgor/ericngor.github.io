import React from 'react';

const Lotto: React.FC = () => {
  return (
    <div className="lotto-component project">
      <script type="text/javascript" src="processing.js"></script>
      <canvas id="lotto-app" data-processing-sources="Lotto.pde"></canvas>
    </div>
  )
};

export default Lotto;