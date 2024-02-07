import { ReactComponent as IconHeart } from '../../../icons/iconHeart.svg';

const IconFav = ({ className }) => {
  return <IconHeart className={`${className} favorite-icon`} />;
};

export default IconFav;
