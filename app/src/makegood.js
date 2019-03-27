import React from "react";
export default (props) => {
    const style = {
        border:"red",
        width:"150px"
    }
    return (
        <div style={style}>{props.word}</div>
    )
}