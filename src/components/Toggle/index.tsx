import style from "./style.module.scss";

interface ToggleType {
  onClick?: () => void;
  isActive: boolean;
}

const Toggle = ({ onClick, isActive }: ToggleType) => {
  return (
    <button
      onClick={onClick}
      className={`${style.toggle} ${isActive && style.active}`}
    >
      <img width={27} src="/icons/toggle.svg" alt="toggle" />
    </button>
  );
};

export default Toggle;
