import './button.scss';
import Loved from '../../../assets/loved.svg';

const FavButton = () => {
  return (
    <>
      <img className="to-favorite" src={Loved} alt="loved" />
    </>
  );
}

export default FavButton;