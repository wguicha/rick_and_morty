import styles from './About.module.css'
import myPhoto from '../../assets/1645715895585.jpg'

export default function About() {
    return (
        <div className={styles.divAbout}>
            <h1>WILLIAM GUICHA - FRONTEND DEVELOPER</h1>
            <img className={styles.imgAbout} src={myPhoto} alt="Any"/>
        </div>
    );

}