
function NavButton ({description, isDisabled}) {
    return (
        <button
            type={"button"}
            disabled={isDisabled}
            onClick={()=> console.log(description)}
        >
            {description}
        </button>
    )
}

export default NavButton;