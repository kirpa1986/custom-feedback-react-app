import {FaTimes, FaEdit} from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from "./shared/Card"
import { useContext } from "react";
import FeedbackContext from "../context/feedbackContext";

function FeedbackItem({item, reverse}) {
    const {feedbackDelete, feedbackEdit} = useContext(FeedbackContext);

    return (
        <Card reverse={reverse}>
            <div className="num-display">{item.rating}</div>
            <button className="close" onClick={() => feedbackDelete(item.id)}>
                <FaTimes style={{color: reverse ? '#fff' : '#000'}}/>
            </button>
            <button className='edit' onClick={() => feedbackEdit(item)}>
                <FaEdit style={{color: reverse ? '#fff' : '#000'}}/>
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedbackItem.defaultProps = {
    reverse: false,
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}
export default FeedbackItem