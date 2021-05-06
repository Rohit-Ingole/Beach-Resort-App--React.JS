const Hero = ({ children, hero = "defaultHero" }) => {
  return <header className={hero}>{children}</header>;
};

export default Hero;
