import styles from "../styles/PizzaList.module.css"
import PizzaCard from "./PizzaCard"

const PizzaList = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
        <p className={styles.desc}>
            This pizza is very very good. It is in fact so good that you would want
            another one when you are done eating it. This is how good this pizza is.
            Therefore you should consider buying 2. I am serious you need to buy 2
            because this business is in ruins. Please think of my family.
        </p>
        <div className={styles.wrapper}>
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
        </div>
    </div>
  )
}

export default PizzaList