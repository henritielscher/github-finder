export type AlertReducerState = {
	msg: string;
	type: string;
};

export type AlertReducerActionRemove = {
	type: "REMOVE_ALERT";
};

export type AlertReducerActionSet = {
	type: "SET_ALERT";
	payload: { msg: string; type: string };
};

export type AlertReducerAction =
	| AlertReducerActionSet
	| AlertReducerActionRemove;

const alertReducer = (state: AlertReducerState, action: AlertReducerAction) => {
	switch (action.type) {
		case "SET_ALERT":
			return action.payload;
		case "REMOVE_ALERT":
			return null;
		default:
			return state;
	}
};

export default alertReducer;
