import "./App.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, deleteNote, editNote } from "./noteActions";
import { useAlert } from "react-alert";
import PopUp from "./pop-up/popUp";

function App() {
	const dispatch = useDispatch();
	const alert = useAlert();

	const [val, setVal] = useState("");
	const [editVal, setEditVal] = useState("");
	const [editId, setEditId] = useState("");
	const notes = useSelector((state) => state.jinal.notes);
	const [trigger, setTrigger] = useState(false);
	const [TimeTrigger, setTimeTrigger] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setTimeTrigger(true);
		}, 7000);
	}, []);

	const submitFun = () => {
		if (val.trim() === "") {
			alert.error("Note cannot be empty");
			return;
		}
		var today = new Date();
		var time =
			"Created Time: " +
			today.getHours() +
			":" +
			today.getMinutes() +
			":" +
			today.getSeconds();

		var date =
			"Created Date :" +
			today.getDate() +
			"/" +
			today.getMonth() +
			"/" +
			today.getFullYear();

		dispatch(addNote(val.trim(), time, date));
		alert.success("Note added successfully");
		setVal("");
	};

	const editFun = (id, text) => {
		setEditVal(text);
		setEditId(id);
		setTrigger(true);
	};

	const deleteFun = (id) => {
		dispatch(deleteNote(id));
		alert.success("Note deleted successfully");
	};

	const editBTNfun = () => {
		if (editVal.trim() === "") {
			alert.error("Note cannot be empty");
			setTrigger(false);
			return;
		}
		var today = new Date();
		var time =
			"Updated Time: " +
			today.getHours() +
			":" +
			today.getMinutes() +
			":" +
			today.getSeconds();

		var date =
			"Updated Date :" +
			today.getDate() +
			"/" +
			today.getMonth() +
			"/" +
			today.getFullYear();

		dispatch(editNote(editId, editVal.trim(), time, date));
		alert.success("Note edited successfully");
		setTrigger(false);
	};

	return (
		<div className="App">
			<h1 onClick={() => setTimeTrigger(true)}>NoteX</h1>
			<div className="input_div">
				<textarea
					type="text"
					value={val}
					placeholder="Enter your note here"
					required={true}
					onChange={(e) => setVal(e.target.value)}
				/>
				<button onClick={submitFun}>Submit</button>
			</div>

			<PopUp trigger={trigger} setTrigger={setTrigger}>
				<div className="input_div">
					<textarea
						type="text"
						placeholder="Enter your note here"
						value={editVal}
						required={true}
						onChange={(e) => setEditVal(e.target.value)}
					/>
					<button onClick={editBTNfun}>submit</button>
				</div>
			</PopUp>
			<PopUp trigger={TimeTrigger} setTrigger={setTimeTrigger}>
				<div className="Time_input_div">
					<h1>Thank you for coming to NoteX.</h1>
					<h2> My name is Jinal Patel.</h2>
					<div className="timePopUp_social">
						<a
							href="https://www.linkedin.com/in/jinal2211/"
							target="_blank"
							rel="noopener noreferrer"
						>
							LinkedIn
						</a>
						<a
							href="https://www.instagram.com/jinal2001/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Instagram
						</a>
					</div>
				</div>
			</PopUp>
			<div className="main_container">
				{notes &&
					notes.map((item) => (
						<div key={item.id} className="container">
							<p className="time">{item.time}</p>
							<p className="date">{item.date}</p>
							<h2>Note: </h2>
							<p className="text">{item.text}</p>
							<button onClick={() => deleteFun(item.id)}>
								Delete
							</button>
							<button onClick={() => editFun(item.id, item.text)}>
								Edit
							</button>
						</div>
					))}
			</div>
		</div>
	);
}

export default App;
