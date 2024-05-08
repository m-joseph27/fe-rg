import './button.scss';

const Button = (props) => {
  return (
    <div className="button">
      <button className={`btn-${props.type}`}>
        { props.text }
      </button>
    </div>
  );
}

export default Button;