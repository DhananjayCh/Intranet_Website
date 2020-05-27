function not6() {
	notif({
		type: "primary",
		msg: "Welcome to VALEX",
	});
}
function not7() {
	notif({
		msg: "<b>Success:</b> Well done Details Submitted Successfully",
		type: "success"
	});
}

function not8() {
	notif({
		msg: "<b>Oops!</b> An Error Occurred",
		type: "error",
	});
}

function not9() {
	notif({
		type: "warning",
		msg: "<b>Warning:</b> Something Went Wrong",
	});
}

function not10() {
	notif({
		type: "info",
		msg: "<b>Info: </b>Some info here.",
		
	});
}

function not11() {
	notif({
		type: "error",
		msg: "<b>Error: </b>This error will stay here until you click it.",
	});
}

function not12() {
	notif({
		type: "dark",
		msg: "Opacity is cool!",
		position: "right",
		opacity: 0.5
	});
}
