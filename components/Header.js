import HeaderStyles from '../styles/Header.module.css'

const Header = () => {
  return (
  <div>
    <h1 className={HeaderStyles.title}>
      <span>WebDev</span> News
    </h1>
    <p className={HeaderStyles.description}>Keep upto date with some latest webdev news</p>
  </div>
  );
};

export default Header
