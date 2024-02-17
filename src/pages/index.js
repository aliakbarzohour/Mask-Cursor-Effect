'useclient';

import useMousePosition from '@/utils/useMousePosition';
import { motion } from 'framer-motion'
import styles from '../styles/page.module.scss'
import { useState } from 'react';

export default function Home() {
  const [isHoverd, setIsHoverd] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHoverd ? 400 : 40;

  return (
    <main className={styles.main}>
      <motion.div className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`
        }}
        transition={{ type: 'tween', ease: 'backOut' }}
      >
        <p
          onMouseEnter={() => { setIsHoverd(true) }}
          onMouseLeave={() => { setIsHoverd(false) }}
        >
          A Developer - with skills that haven't been replaced by AI (yet) - making good shit only if the paycheck is equally good.
        </p>
      </motion.div>
      <div className={styles.body}>
        <p>
          I'm a <span>selectively skilled</span> web Developer with strong focus on producing high quality & impactful digital experience.
        </p>
      </div>
    </main>
  );
}
