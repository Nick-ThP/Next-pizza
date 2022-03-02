import Image from 'next/image'
import styles from '../styles/PizzaCard.module.css'

const PizzaCard = () => {
  return (
    <div className={styles.container}>
        <Image src="/img/pizza.png" alt="pizza" width="500" height="500" />
        <h1 className={styles.title}>FIORI DE ZUCCA</h1>
        <span className={styles.price}>29,95 kr</span>
        <p className={styles.desc}>
            This pizza is very very good. Trust us on this. Trust us.
        </p>
    </div>
  )
}

export default PizzaCard