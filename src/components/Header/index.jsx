import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <h1 className={styles.headerTitulo}>Sabe como anda o seu IMC?</h1>
                <p className={styles.headerParagrafo}>
                    IMC é a sigla para Índice de Massa Corpórea, que é nada mais que a sua altura e o seu peso elevado ao quadrado nós mostrando se o seu peso está no ideal.
                </p>
                <h2 className={styles.headerSubtitulo}>Classificação - IMC</h2>
                <img className={styles.headerImagem} src="https://drpaulopittelli.com.br/wp-content/uploads/2017/11/175-x-175-3.png" alt="" />
            </div>
        </header>
    )
}

export default Header;