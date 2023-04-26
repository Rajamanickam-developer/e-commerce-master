
import "../style/signUp.css";
import { AiFillCloseCircle } from "react-icons/ai";


function SignUp({visibility}){
    
	return (
    <div
        className="modal"
        style={{
            display: visibility
                ? "block"
                : "none",
        }}>
        <div>
            <button className="sign-up-btn" onClick={{}}>Sign-Up</button>
        <main className="signUp-model">
            <div className="signUp-card">
				<div className="signUp-header">
                    <h1 className="signup-title">Sign Up</h1>
                    <button
						className="btn close-btn"
						onClick={{}}>
						<AiFillCloseCircle
							size={30}
						/>
					</button>
                </div>
                    <div className="signUp-form">
                        <div className="form-content">
                            <label>Name</label>
                            <input type="text" placeholder="Enter your name"/>
                            </div>
                            <div className="form-content">
                            <label>E-mail Address</label>
                            <input type="email" placeholder="Enter your email"/>
                            </div>
                            <div className="form-content">
                            <label>Password</label>
                            <input type="password" placeholder="Enter your password"/>
                            </div>
                            <div className="form-content">
                            <label>Phone Number</label>
                            <input type="password" placeholder="Enter your phone number"/>
                            </div>
                        <button className="signup-btn">SIGNUP</button>
                    </div>
				
            </div>
        </main>
        </div>
    </div>
	);
}

export default SignUp;
