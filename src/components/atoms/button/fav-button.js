import './button.scss';
import Loved from '../../../assets/loved.svg';

const FavButton = () => {
  return (
    <>
      <button className="btn-fav">
        <img src={Loved} alt="loved" />
      </button>
    </>
  );
}

export default FavButton;