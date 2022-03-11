import { createContext, useContext, useReducer } from "react";
import alertReducer, { AlertReducerState } from "./AlertReducer";
import Alert from "../../components/layout/Alert";

type Alert = {
	msg: string;
	type: string;
};

type AlertContextProps = {
	alert: Alert;
	setAlert: (msg: string, type: string) => void;
};

type AlertProviderProps = {
	children:
		| React.ReactChild
		| React.ReactChild[]
		| JSX.Element
		| JSX.Element[];
};

const AlertContext = createContext<AlertContextProps | undefined>(undefined);

export function useAlertContext() {
	const context = useContext(AlertContext);
	if (context === undefined) throw Error("Invalid Alert Context");
	else return context;
}

export function AlertProvider({ children }: AlertProviderProps) {
	const initialState = null;

	const [state, dispatch] = useReducer(alertReducer, initialState as Alert);

	const setAlert = (msg: string, type: string) => {
		dispatch({ type: "SET_ALERT", payload: { msg, type } });

		setTimeout(() => dispatch({ type: "REMOVE_ALERT" }), 3000);
	};
	return (
		<AlertContext.Provider value={{ alert: state, setAlert }}>
			{children}
		</AlertContext.Provider>
	);
}
export default AlertContext;
