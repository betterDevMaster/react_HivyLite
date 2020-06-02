export default function(state = {}, action){
	switch(action.type){
		case "SELECTED_PRODUCT":
		return action.payload;
		break;
	}
	return state;
}