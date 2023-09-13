import cover from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between'>
            <h2 className='text-5xl'>Module 42 Knowledge Cafe Again Practice</h2>
            <img src={cover} alt="" />
        </div>
    );
};

export default Header;