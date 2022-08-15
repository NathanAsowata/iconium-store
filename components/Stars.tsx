import {AiFillStar, AiOutlineStar} from "react-icons/ai"
import styles from "../styles/Stars.module.scss"

interface propTypes {
    rate: number
}

const Stars = ({rate}: propTypes) => {
  const stars = Math.round(rate)

  if(stars===1) {
    return( 
        <>
            <AiFillStar className={styles.star} /> <AiOutlineStar className={styles.star} /> <AiOutlineStar className={styles.star} /> <AiOutlineStar className={styles.star} /> <AiOutlineStar className={styles.star} />
        </>
    )
  }
  else if(stars===2) {
    return( 
        <>
            <AiFillStar className={styles.star} /> <AiFillStar className={styles.star} /> <AiOutlineStar className={styles.star} /> <AiOutlineStar className={styles.star} /> <AiOutlineStar className={styles.star} />
        </>
    )
  }
  else if(stars===3) {
    return( 
        <>
            <AiFillStar className={styles.star} /> <AiFillStar className={styles.star} /> <AiFillStar className={styles.star} /> <AiOutlineStar className={styles.star} /> <AiOutlineStar className={styles.star} />
        </>
    )
  }
  else if(stars===4) {
    return( 
        <> 
            <AiFillStar className={styles.star} /> <AiFillStar className={styles.star} /> <AiFillStar className={styles.star} /> <AiFillStar className={styles.star} /> <AiOutlineStar className={styles.star} />
        </>
    )
  }
  else if(stars===5) {
    return( 
        <>
            <AiFillStar className={styles.star} /> <AiFillStar className={styles.star} /> <AiFillStar className={styles.star} /> <AiFillStar className={styles.star} /> <AiFillStar className={styles.star} />
        </>
    )
  }
  else {
    return <p className={styles.star}> N/A </p>
  }
  
}

export default Stars