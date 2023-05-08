import styles from "./style.module.css"
import PropTypes from "prop-types"

export default function FriendsList(props) {

return(
<div>
<h1>Friends</h1>
<ul>
{props.friend.map(person =>(
<li className={styles.item} key={person.id}>
        <span className={styles.status}></span>
        <img className={styles.avatar} src={person.avatar} alt="User avatar" width="48"></img>
<p className={styles.name}>{person.name}</p>
</li>
))}
</ul>
</div>
);
}
