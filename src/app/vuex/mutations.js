import { guid } from '../../../utils';

export default {
    DO_SOMETHING (state, { data }) {
        state.something = data;
    }
};