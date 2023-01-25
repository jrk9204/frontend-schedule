import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faChevronDown,
    faChevronRight,
    faPlus,
    faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconNameProps } from "../../data/types";

library.add(faChevronDown, faTrashCan, faPlus, faChevronRight);

function icon({ iconName, handleArrow }: IconNameProps) {
    return (
        <FontAwesomeIcon
            icon={iconName}
            style={{
                cursor: "pointer",
                margin: 5,
            }}
            onClick={handleArrow}
        />
    );
}

export default icon;
