import styles from "./style.module.css"
import PropTypes from "prop-types"

export default function Items(props) {

    return (
        <table className={styles.history}>
            <thead className={styles.topRow}>
                <tr>
                    <th className={styles.type}>Type</th>
                    <th className={styles.amount}>Amount</th>
                    <th className={styles.currency}>Currency</th>
                </tr>
            </thead>
            {props.item.map(transaction => (

                <tbody key={transaction.id}>
                    <tr  >
                    <td  className={styles.invoice}>{transaction.type}</td>
                    <td className={styles.quantity}>{transaction.amount}</td>
                    <td className={styles.currency}>{transaction.currency}</td>
                    </tr>

                </tbody>
            ))}
</table>)
}
Items.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string,
}