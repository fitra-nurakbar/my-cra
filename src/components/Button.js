import styles from "../styles/Button.module.css";

export default function Button(props) {
  const { children, text, className = "bg-sky-500" } = props;

  return (
    <button {...props} className={`${className} ${styles.button}`}>
      {children || text}
    </button>
  );
}
