import React from 'react';
import homeLogo from '../Cibus-Market.png';

const RegisterPage = () => (
        <>
        <div class="recipe">
             <form action="calltoReactHook">
                <h4> Cibus Market Registration </h4>
                <label value="firstName">First Name:</label>
                <input type="text" value=""></input>
                <br/>
                <label value="LastName">Last Name:</label>
                <input type="text" value=""></input>
                <br/>
                <label value="userEmail">Email:</label>
                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                <input type="text" value=""></input>
                <br/>
                <label value="userPassword">Password:</label>
                <input type="text" value=""></input>
                <br/>
                <label value="userPhone">Phone Number:</label>
                <input type="text" value=""></input>
                <br/>
                <label value="userAddy">Street Address:</label>
                <input type="text" value="" size="50"></input>
                <br/>
                <label value="accountType">Account Type:</label>
                <select id="accountChoice" value="accountType">
                    <option value="default"></option>
                    <option value="trial"> Free Trial </option>
                    <option value="premium"> Premium </option>
                    <option value="vendor"> Vendor </option>
                </select>
                <br/> 
                <button class="btn-primary" value="Submit"> Submit</button>
            </form>
        </div>
        <div class="containter">
			<h1 className="recipe"> Cibus Market </h1>
			<img src={homeLogo} className="center" width="800" height="600"/>        
		</div>
        </>

);

export default RegisterPage;
