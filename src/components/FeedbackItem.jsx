import {FaTimes} from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from "./shared/Card"

function FeedbackItem({item, reverse, feedbackDeleteHandler}) {

    return (
        <Card reverse={reverse}>
            <div className="num-display">{item.rating}</div>
            <button className="close">
                <FaTimes onClick={() => feedbackDeleteHandler(item.id)} style={{color: reverse ? '#fff' : '#000'}}/>
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