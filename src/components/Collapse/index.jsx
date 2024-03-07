import React from "react";

function Collapse(props) {
    const { data } = props;
    console.log("data :", data);

    let content;
    if (typeof data === "string") {
        content = <div>{data}</div>;
    } else if (Array.isArray(data)) {
        content = (
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        );
    }

    return (
        <div>
            {content}
        </div>
    );

}
export default Collapse;
