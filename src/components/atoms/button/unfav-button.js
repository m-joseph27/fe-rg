import './button.scss';
import UnLoved from '../../../assets/unloved.svg';

const UnFavButton = () => {
  return (
    <>
      <img className="to-favorite" src={UnLoved} alt="unloved" />
    </>
  );
}

export default UnFavButton;