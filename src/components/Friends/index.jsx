import styles from "./style.module.css"
import PropTypes from "prop-types"

export default function FriendsList(props) {
return(
<div className={styles.friends}>
<h1 className={styles.title}>Friends</h1>
<ul>
    {props.friend.map(person => (
    <li className={styles.item} key={person.id}>
    <span className={person.isOnline ? styles.online: styles.offline} ></span>
    <img className={styles.avatar} src={person.avatar} alt="User avatar" width="48"></img>
    <p className={styles.name}>{person.name}</p>
</li>
))}
</ul>
</div>
);
}
FriendsList.propTypes = {
    friend: PropTypes.array,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}

