import './button.scss';
import UnLoved from '../../../assets/unloved.svg';

const UnFavButton = () => {
  return (
    <>
      <button className="btn-fav">
        <img src={UnLoved} alt="unloved" />
      </button>
    </>
  );
}

export default UnFavButton;