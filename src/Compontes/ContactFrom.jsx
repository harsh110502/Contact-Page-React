import React from "react";
import "./ContactFrom.css";
import Button from "./Button/Button";
import { MdMessage, MdPhoneCallback } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
const ContactFrom = () => {
	const onViaCallSubmit = () => {
		console.log("onViaCallSubmit called");
	};
	const onChatSubmit = () => {
		console.log("onChat called");
	};
	const onViaMail = () => {
		console.log("onViaMail called");
	};
	const onSubmit = (event) => {
		// event.preventDefault();
		console.log(event);
	};
	return (
		<>
			<div className="container_from">
				<div className="Contact_From_Lables">
					<div className="top_btn">
						<Button
							text="VIA SUPPORT CHAT"
							icon={<MdMessage />}
							onClick={onChatSubmit}
						/>
						<Button
							text="VIA CALL"
							icon={<MdPhoneCallback />}
							onClick={onViaCallSubmit}
						/>
					</div>
					<Button
						isOutLine={true}
						text="VIA EMAIL FROM "
						icon={<IoMdMail />}
						onClick={onViaMail}
					/>
					<from onSubmit={onSubmit}>
						<div className="from_Container">
							<lable htmlFor="name">Name</lable>
							<input type="text" name="name" />
						</div>
						<div className="from_Container">
							<lable htmlFor="Email">Email</lable>
							<input type="text" name="Email" />
						</div>
						<div className="from_Container">
							<lable htmlFor="text">TEXT</lable>
							<textarea type="text" name="text" rows={10} />
						</div>
						<div
							style={{
								marginTop: "10px",
								display: "flex",
								justifyContent: "end",
							}}>
							<Button text="SUBMIT BUTTON" />
						</div>
					</from>
				</div>

				<div className="Contact_Image">
					<img src="Service1.svg" />
				</div>
			</div>
		</>
	);
};

export default ContactFrom;
