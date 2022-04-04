import { useState } from "react";

function Left() {
    const [season, setSeason] = useState(['wiosna', 'lato', 'jesien', 'zima']);
    const [isTrue, setIsTrue] = useState(true);

    let seasonsChange = season.map(element => <li key={element.toString()}>{element}</li>)

    return (
        <div>
            <ul>
                {isTrue == true ? seasonsChange : null}
            </ul>

        </div>
    );
}

export default Left;
