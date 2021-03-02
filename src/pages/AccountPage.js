import React from 'react';
import homeLogo from '../Cibus-Market.png';

const AccountPage = () => (
        <>
        <div class="recipe">
            <h4> Account Login: </h4>
            <form>
                <label value="loginName">Account Name:</label>
                <input type="text" value=""></input>
                <br/>
                <label value="loginPassword">Password:</label>
                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                <input type="text" value=""></input>
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

export default AccountPage;
