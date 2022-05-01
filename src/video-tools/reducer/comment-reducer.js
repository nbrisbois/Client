import {DELETE_COMMENT, FIND_ALL_COMMENT, CREATE_COMMENT, UPDATE_COMMENT}
    from "../actions/comment-action";

const commentReducer =
    (state = [], action) => {
        switch (action.type) {
            case CREATE_COMMENT:
                return [
                    ...state,
                    action.newComment
                ];
            case DELETE_COMMENT:
                return state.filter(
                    comment => comment._id !== action.comment._id);
            case FIND_ALL_COMMENT:
                return action.comments;
            case UPDATE_COMMENT:
                return state.map(
                    comment => comment._id === action.comment._id ?
                        action.comment : comment);
            default:
                return state
        }
    };

export default commentReducer;