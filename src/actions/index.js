/**
 * Created by Luteh on 14/06/2017.
 */
export const emailChanged = (text) => {
    return {
        type: 'email_changed',
        payload: text
    }
};