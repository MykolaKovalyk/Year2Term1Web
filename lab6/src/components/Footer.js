import LinkButton from "./basic/LinkButton";
import styles from "./Footer.module.css"



export default function Footer(props) {
    return (
        <footer className={styles.footer}>
            <center>
                <div className={styles.background}>
                    
                        <div className={styles.useful_links}>
                            <LinkButton text="Privacy" link=""/>
                            <LinkButton text="Contact Me" link=""/>
                        </div>
            

                </div>

                <div className={styles.copyright}>
                    Copyright "Mykola Kovalyk"
                </div>
            </center> 
        </footer>
    );
}