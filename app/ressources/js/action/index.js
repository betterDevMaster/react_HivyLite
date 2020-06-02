export const takeProduct = (search) => {
	return {
		type: "SELECTED_PRODUCT",
		payload: search
	}
}
export const takeRequest = (search) => {
	return {
		type: "SELECTED_REQUEST",
		payload: search
	}
}
