function MessageComponent({showMessage}){
    return (
        <div>
            {/* {showMessage && <p>This message is conditionally rendered!</p>} */}
            <p>Props returned {showMessage}</p>
        </div>
    )
}
export default MessageComponent