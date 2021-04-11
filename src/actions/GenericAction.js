import axios from 'axios';

export const GenericInprogressAction = (type) => {
    return {
        type: type,
    };
};

export const GenericErrorAction = (type, error) => {
    return {
        type: type,
        error,
    };
};

export const GenericSuccessAction = (type, data) => {
    return {
        type: type,
        data,
    };
};

export const GenericGetAction = async (url, actionTypes, dispatch) => {
    dispatch(GenericInprogressAction(actionTypes.InProgress));
    try {

        await axios
            .get(url)
            .then((resp) => {
                dispatch(GenericSuccessAction(actionTypes.Success, resp.data));
            })
            .catch((err) => {
                console.log(err);
                dispatch(GenericErrorAction(actionTypes.Error, err));
            });

    } catch (err) {
        dispatch(GenericErrorAction(actionTypes.Error, err));
    }
};

export const GeenricPostAction = async (url, actionTypes, request, dispatch) => {
    dispatch(GenericInprogressAction(actionTypes.InProgress));
    try {

        await axios
            .post(url, request)
            .then((resp) => {
                dispatch(GenericSuccessAction(actionTypes.Success, resp.data));
            })
            .catch((err) => {
                console.log(err);
                dispatch(GenericErrorAction(actionTypes.Error, err));
            });

    } catch (err) {
        dispatch(GenericErrorAction(actionTypes.Error, err));
    }
}