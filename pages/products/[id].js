import Image from 'next/image';
import styles from '../../styles/product.module.css'

const Product = () => {

  const [size, setSize] = useState(0);

  const pizza = {
    id: 1,
    img: "/img/pizza.png",
    name: "Campagnola",
    price: [19.9, 23.9, 27.9],
    desc: "Lorem upsum dolor sit amet. consectetur adipiscing elit."
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} objectFit="contain" layout="fill" alt="pizza" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>${pizza.price[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>

          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/img/size.png" layout="fill" alt="pizza" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/img/size.png" layout="fill" alt="pizza" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/img/size.png" layout="fill" alt="pizza" />
            <span className={styles.number}>Large</span>
          </div>

        </div>  

        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input type="checkbox" id="double" name="double" className={styles.checkbox} />
            <label htmlFor="double">Double ingredients</label>
          </div>
          <div className={styles.option}>
            <input type="checkbox" id="extraCheese" name="extraCheese" className={styles.checkbox} />
            <label htmlFor="extraCheese">Extra cheese</label>
          </div>
          <div className={styles.option}>
            <input type="checkbox" id="chili" name="chili" className={styles.checkbox} />
            <label htmlFor="chili">Chili sauce</label>
          </div>
          <div className={styles.option}>
            <input type="checkbox" id="garlic" name="garlic" className={styles.checkbox} />
            <label htmlFor="garlic">Garlic sauce</label>
          </div>
          <div className={styles.option}>
            <input type="checkbox" id="wholeGrain" name="wholeGrain" className={styles.checkbox} />
            <label htmlFor="wholeGrain">Whole grain bread</label>
          </div>
        </div>

        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>Add to cart</button> 
        </div>

      </div>
    </div>
  )
}

export default Product