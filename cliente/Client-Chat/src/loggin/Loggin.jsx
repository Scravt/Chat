
import styles from './Loggin.module.css'


export const Loggin = ({ onChangePlayerName, onLoggin }) => {

  return (
    <div className={styles.centerbox}>
      <label>Ingresa tu nombre</label>
      <input type="text" onChange={onChangePlayerName} />
      <button style={{ padding: 10 }} onClick={onLoggin}>
        ir al lobby
      </button>
    </div>
  );
};

