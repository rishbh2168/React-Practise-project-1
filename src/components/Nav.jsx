// import "./App.css";
const Navbar = () => {

    return(
<div>
<nav className="container">
    <div className="logo">
        <img src="/images/brand_logo.png" alt="logo"/>
    </div>

    <div>
        <ul>
            <li href = '#'>menu </li>
            <li href = '#'>Location </li>
            <li href = '#'>About </li>
            <li href = '#'>Contact </li>
        </ul>
    </div>

<div>
    <button>login</button>
</div>


</nav>

</div>
    );

};

export default Navbar;