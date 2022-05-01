import * as service from '../services/video-service';

export const CREATE_COMMENT = 'CREATE_COMMENT';
export const FIND_ALL_COMMENT = 'FIND_ALL_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';


export const createComment = async (dispatch, userId, videoID, comment, profile) => {
    const newComment = await service.createComment(userId, videoID, comment);
    newComment.username = profile.username
    newComment.avatar = profile.avatar
    dispatch({
        type: CREATE_COMMENT,
        newComment
    });
}

export const findCommentsByVideo = async (dispatch, id) => {
    const comments = await service.findComments();
    const filteredComments = comments.filter(comment => comment.videoId === id)
    dispatch({
        type: FIND_ALL_COMMENT,
        comments : filteredComments
    });
}

export const findCommentsByUser = async (dispatch, id) => {
    const comments = await service.findComments();
    const filteredComments = comments.filter(comment => comment.commenter === id)
    dispatch({
        type: FIND_ALL_COMMENT,
        comments : filteredComments
    });
}
export const updateComment = async (dispatch, comment, id) => {
    const status = await service.updateComment(comment, id);
    dispatch({
        type: UPDATE_COMMENT,
        comment
    });
}

export const deleteComment = async (dispatch, comment) => {
    const response = await service.deleteComment(comment);
    dispatch({
        type: DELETE_COMMENT,
        comment
    })
}
