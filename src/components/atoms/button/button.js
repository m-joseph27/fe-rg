import './button.scss';

const Button = (props) => {
  return (
    <div className={props.disabled ? "btn-disabled" : "button"}>
      <button disabled={props.disabled} className={`btn-${props.type}`}>
        {props.icon &&
          <i class="fa-regular fa-eye"></i>
        }
        { props.text }
      </button>
    </div>
  );
}

export default Button;