import styles from "./dotgrid.module.scss";
import anime from "animejs";
import { useEffect, useState } from "react";

export const DotGrid = () => {
  const [gridDimensions, setGridDimensions] = useState({ width: 250, height: 20 });

  useEffect(() => {
    const updateGridSize = () => {
      const parentElement = document.querySelector(`.${styles.dotGrid}`)?.parentElement;
      if (parentElement) {
        const { width, height } = parentElement.getBoundingClientRect();
        const dotSize = 20; // Adjust based on your dot size
        const spacing = 5; // Adjust based on your spacing
        const newWidth = Math.floor(width / (dotSize + spacing));
        const newHeight = Math.floor(height / (dotSize + spacing));
        setGridDimensions({ width: newWidth, height: newHeight });
      }
    };

    updateGridSize();
    window.addEventListener('resize', updateGridSize);
    return () => window.removeEventListener('resize', updateGridSize);
  }, []);

  const GRID_WIDTH = gridDimensions.width;
  const GRID_HEIGHT = gridDimensions.height;

  const dots = [];

  const handleDotClick = (e: any) => {
    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 0.35, easing: "easeOutSine", duration: 250 },
        { value: 0.05, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e.target.dataset.index,
      }),
    });
  };

  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          onClick={handleDotClick}
          className={styles.dotWrapper}
          data-index={index}
          key={`${i}-${j}`}
        >
          <div className={`${styles.dot} dot-point`} data-index={index} />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className={styles.dotGrid}
    >
      {dots.map((dot) => dot)}
    </div>
  );
};
