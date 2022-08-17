import Head from 'next/head'
import styles from "../styles/Checkout.module.scss"

const Checkout = () => {
  return (
    <>
      <Head>
        <title>Checkout Page</title>
        <link rel="shortcut icon" href="logo.ico" type="image/x-icon" />
      </Head>
      <main className={styles.container}>
        <h1>Checkout</h1>
        <form className={styles.form}>
          <fieldset>
            <label htmlFor="firstname">First Name</label><br />
            <input type="text" name="firstname" required />
          </fieldset>
          <fieldset>
            <label htmlFor="lastname">Last Name</label><br />
            <input type="text" name="lastname" required />
          </fieldset>
          <fieldset>
            <label htmlFor="email">Your Email</label><br />
            <input type="email" required />
          </fieldset>
          <fieldset>
            <label htmlFor="address">Billing Address</label><br />
            <input type="text" required />
          </fieldset>
          <button type={"submit"}>Submit</button>
        </form>
        <section>
        <button className={styles.mastercard}>Pay with MasterCard</button>
        <button className={styles.paypal}>Pay with PayPal</button>
        </section>
      </main>
    </>
  )
}

export default Checkout