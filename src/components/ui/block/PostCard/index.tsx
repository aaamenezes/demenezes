import Date from './Date';
import Description from './Description';
import Image from './Image';
import Infos from './Infos';
import Root from './Root';
import Title from './Title';

const PostCard = Object.assign(Root, {
  Image,
  Infos,
  Title,
  Description,
  Date,
});

export default PostCard;
