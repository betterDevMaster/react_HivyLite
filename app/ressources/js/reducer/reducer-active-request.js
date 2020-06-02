export default function(state = {}, action){
	switch(action.type){
		case "SELECTED_REQUEST":
		return action.payload;
		break;
	}

	return state;
}