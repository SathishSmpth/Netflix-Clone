import accountMenuDropDownIcon from "../icons/accountMenuIcon.png";

const AccountMenu=()=>{
    return (
        <div className='account-drop-down' >
            <img src={accountMenuDropDownIcon} alt=""/>
            <span className="account-drop-down-caret"></span>
        </div>
    );
}

export default AccountMenu;