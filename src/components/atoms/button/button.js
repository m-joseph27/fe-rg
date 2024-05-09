import './button.scss';

const Button = (props) => {
  return (
    <div className="button">
      <button className={`btn-${props.type}`}>
        {props.icon &&
          <i class="fa-regular fa-eye"></i>
        }
        { props.text }
      </button>
    </div>
  );
}

export default Button;