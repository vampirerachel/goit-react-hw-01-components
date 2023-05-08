import styles from "./style.module.css"
import PropTypes from "prop-types"

export default function Profile(props) {
    return (
        <div className={styles.profile}>
            <div className={styles.description}>
                <img src={props.avatar}
                    alt="User avatar"
                    className={styles.avatar}></img>
                <p className={styles.name}>{props.username}</p>
                <p className={styles.tag}>@{props.tag}</p>
                <p className={styles.location}>{props.location}</p>
        </div>
            <ul className={styles.stats}>
                <li>
                    <span className={styles.label}>Followers </span>
                    <span className={styles.quantity}> { props.stats.followers }</span>
                </li>
                <li>
                    <span className={styles.label}>Views</span>
                    <span className={styles.quantity}> { props.stats.views }</span>
                </li>
                <li>
                    <span className={styles.label}>Likes</span>
                    <span className={styles.quantity}> { props.stats.likes }</span>
                </li>
</ul>
</div>)}
Profile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    quantity: PropTypes.number,
    
}