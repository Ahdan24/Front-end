import { FC } from "react";
import styles from  './ComponentC.module.css';


interface ComponentCprops {
  name: string;
}

const ComponentC: FC<ComponentCprops> = ({ name }) => {
  return <div className={styles.biru}>Selamat datang,{name} Aufa</div>;
};

export default ComponentC;
