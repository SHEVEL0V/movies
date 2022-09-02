import PropTypes from 'prop-types';
import s from './style.module.css';

export default function Container({ children }) {
  return <div className={s.container}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
