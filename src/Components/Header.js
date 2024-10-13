import ReactPropTypes from "prop-types";
import Button from "./Button";

const Header = ({title, onAdd, showAdd}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={showAdd ? "navy" : "#008f00"} text= {showAdd ? "Close" : "Add"} onClick={onAdd}/>
        </header>
    )
}
Header.defaultProps = {
    title: "Task Tracker"
}
Header.ReactPropTypes = {
    title: ReactPropTypes.string.isRequired
}

export default Header;
