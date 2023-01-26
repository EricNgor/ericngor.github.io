import React from 'react';

const Lotto: React.FC = () => {
  return (
    <div className="lotto-component project">
      <canvas id="lotto-app" data-processing-sources="Lotto.pde"></canvas>
      <canvas id="lotto-app" data-processing-sources="bin/Lotto.pde"></canvas>
    </div>
  )
};

export default Lotto;