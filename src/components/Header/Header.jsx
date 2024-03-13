import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <header className="container mx-auto flex justify-between items-center py-4 border-b-2">
      <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;
