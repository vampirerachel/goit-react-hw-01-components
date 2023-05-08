import PropTypes from "prop-types"
import styles from "./style.module.css"
export default function Statistics(props) {

    return (
        <div className={styles.statistics}>
        {props.title ? <h1 className={styles.title}>{props.title}</h1> : <></>}
        <ul className={styles.stats}>{props.stats.map(stat => (
            <li key={stat.id} className={styles.item}>
                <span className={styles.label}>{stat.label}</span>
                <span className={styles.percentage}>{stat.percentage}</span>
            </li>
        ))}
        </ul>
    </div>
    );
}
Statistics.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
}