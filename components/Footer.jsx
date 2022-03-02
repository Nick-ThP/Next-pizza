import Image from "next/image"
import styles from "../styles/Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" layout="fill" alt="info" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            ALL NEW FLAVORS JUST FOR YOU MY FRIEND!
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>
            FIND OUR RESTAURANT!
          </h1>
          <p className={styles.text}>
            1546 R. Don Road 305.
            <br /> 
            New York City, 45368
            <br />
            (564) 563-1235
          </p>
          <p className={styles.text}>
            1546 R. Don Road 305.
            <br /> 
            New York City, 45368
            <br />
            (564) 563-1235
          </p>
          <p className={styles.text}>
            1546 R. Don Road 305.
            <br /> 
            New York City, 45368
            <br />
            (564) 563-1235
          </p>
          <p className={styles.text}>
            1546 R. Don Road 305.
            <br /> 
            New York City, 45368
            <br />
            (564) 563-1235
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>
            WORKING HOURS
          </h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br />
            9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY UNTIL SUNDAY
            <br />
            15:00 - 23:00
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer