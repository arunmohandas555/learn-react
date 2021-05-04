const isLoggedInReducer = (state = false, action) => {
	switch (action.type) {
		case 'SIGN_IN':
			return true;
			break;
		default:
			return false;
	}
}
export default isLoggedInReducer;