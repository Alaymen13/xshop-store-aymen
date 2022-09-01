import React from "react";

const ContactInfo = () => {
	return (
		<div className="contactInfo container">
			<div className="row">
				<div className="col-12 col-md-4 contact-Box">
					<div className="box-info">
						<div className="info-image">
							<i className="fas fa-phone-alt"></i>
						</div>
						<h5>Call Us 24x7</h5>
						<p>(+251) 90 299 0000</p>
					</div>
				</div>
				<div className="col-12 col-md-4 contact-Box">
					<div className="box-info">
						<div className="info-image">
							<i className="fas fa-map-marker-alt"></i>
						</div>
						<h5>Headquarter</h5>
						<p>Edget building, Piasa, ST.Petros</p>
					</div>
				</div>
				<div className="col-12 col-md-4 contact-Box">
					<div className="box-info">
						<div className="info-image">
							<i className="fas fa-fax"></i>
						</div>
						<h5>Email</h5>
						<p>xshop@gmail.com</p>
					</div>
				</div>
				<h5 className="mt-3 pt-2 container text-center">Contact Us</h5>
				<iframe
					className="container mt-4"
					style={{
						padding: "40px",
						background: "#FFFFFF",
						border: "none",
						borderRadius: "2px",
						boxShadow:
							"0 2px 10px 0 rgba(70, 76, 79, .2);",
						width: "100%",
						height: "420px",
					}}
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15761.21211565057!2d38.74017886977539!3d9.036097599999996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4d6ce11595262667!2zWC1TSE9QIOGLqOGIheGJteGImOGJtSDhiqXhiYPhi47hib0g4Yqg4Yi14YiY4Yyq!5e0!3m2!1sen!2set!4v1661883199179!5m2!1sen!2set"
				></iframe>
			</div>
		</div>
	);
};

export default ContactInfo;
