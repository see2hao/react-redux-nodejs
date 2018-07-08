import { ERROR_MESSAGE } from "../actions/actions";

export default function errorMsg(msg){
    return {msg, type: ERROR_MESSAGE}
}