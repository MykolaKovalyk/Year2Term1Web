import styles from "./BookNow.module.css"
import Button from "../basic/Button"
import { useLocation, useNavigate } from "react-router-dom";

export default function BookNow(props) {
    const navigate = useNavigate();
    const path = useLocation();
    return (
        <div className={styles.book_now}>
            <center>
                <h1>find your parking spot now</h1>
                Search for numerous parkings with a click of a button
                <br/>
                <br/>
                <br/>
                <Button className={styles.view_button} text="View Parkings" onClick={() => navigate(`/catalog/filter`)}/>
            </center>
        </div>
    );
}