import React from 'react'
import logo from './images/logo.jpg'
import { callApi, errorResponse,setSession } from './main';

const popupwindowstyle={width:'300px',height:'450px', background:'white'};
const logostyle={width:'75px',height:'75px', position:'absolute', left:'115px', top: '10px'};
const logodivstyle={height: '100px'}
const space={height:'10px'}


function Login(){
    window.onload = function(){
  var login = document.getElementById('login');
  login.style.display = " "; // hide the login popup on load
}
    function validate()
    {
        var T1=document.getElementById('T1');
        var T2=document.getElementById('T2');
  
        var url = "http://localhost:5000/login/signin";
        var data = JSON.stringify({
            emailid : T1.value,
            pwd : T2.value
        });
        callApi("POST", url, data, loginSuccess, errorResponse);
    }

    function loginSuccess(res)
    {
        var data = JSON.parse(res);
        if(data === 1)
            {
                var T1=document.getElementById('T1');
                setSession("sid", T1.value, (24 * 60));
                window.location.replace("/home");
            }
        else
            alert("Invalid Credentials!");
    }

    function registration(){
        var T1 = document.getElementById('T1');
        var T2 = document.getElementById('T2');
        T1.value="";
        T2.value="";
        
        var reg = document.getElementById('registration');
        var login = document.getElementById('login');
        login.style.display = "none";
        reg.style.display = "block";
    }

function password()
{
    var UT1 = document.getElementById('UT1');
    var UT2 = document.getElementById('UT2');
    var UT3 = document.getElementById('UT3');
    UT1.style.border="";
    UT2.style.border="";
    UT3.style.border="";
    if(UT1.value==="")
    {
        UT1.style.border = "1px solid red";
        UT1.focus();
        return;
    }
    if(UT2.value==="")
    {
        UT2.style.border = "1px solid red";
        UT2.focus();
        return;
    }
    if(UT3.value==="")
    {
        UT3.style.border = "1px solid red";
        UT3.focus();
        return;
    }
    if(UT2.value!==UT3.value)
    {
        alert("Password and Confirm Password must be same");
        UT2.style.border="1px solid red";
        UT2.focus();
        return;
    }
    
    var url = "http://localhost:5000/forgotPassword/reset";
    var data = JSON.stringify({
        UserName : UT1.value,
        newpassword : UT2.value,
        confirmpassword : UT3.value
    });
    callApi("POST", url,  data, PasswordSuccess, errorResponse);
    //alert("Password Updated successfully...");

    
    UT1.value="";
    UT2.value="";
    UT3.value="";

    var login = document.getElementById('login');
    var registration = document.getElementById('forgotpassword');
    registration.style.display = 'none';
    login.style.display = 'block';
}



function forgotPassword(){
    var UT1 = document.getElementById('T1');
    var UT2 = document.getElementById('T2');
    UT1.value="";
    UT2.value="";
    
    var reg = document.getElementById('forgotpassword');
    var login = document.getElementById('login');
    login.style.display = "none";
    reg.style.display = "block";
    
}
function register(){
    var RT1 = document.getElementById('RT1');
    var RT2 = document.getElementById('RT2');
    var RT3 = document.getElementById('RT3');
    var RT4 = document.getElementById('RT4');
    var RT5 = document.getElementById('RT5');
    var RT6 = document.getElementById('RT6');
    RT1.style.border="";
    RT2.style.border="";
    RT3.style.border="";
    RT4.style.border="";
    RT5.style.border="";
    RT6.style.border="";

    if(RT1.value==="")
    {
        RT1.style.border = "1px solid red";
        RT1.focus();
        return;
    }
    if(RT2.value==="")
    {
        RT2.style.border = "1px solid red";
        RT2.focus();
        return;
    }
    if (RT3.value === "" || !/^\d{10}$/.test(RT3.value)) {
        alert("Please enter a valid 10-digit contact number.");
        RT3.style.border = "1px solid red";
        RT3.focus();
        return;
    }
    if(RT4.value==="")
    {
        RT4.style.border = "1px solid red";
        RT4.focus();
        return;
    }
    // Check if the email matches the required format
    if (!/^\S+@\S+\.\S+$/.test(RT4.value) && !/^[a-zA-Z0-9._-]+@gmail\.com$/.test(RT4.value)) {
        alert("Please enter a valid email or Gmail address.");
        RT4.style.border = "1px solid red";
        RT4.focus();
        return;
    }
    if(RT6.value==="")
    {
        RT6.style.border = "1px solid red";
        RT6.focus();
        return;
    }
    if(RT5.value!==RT6.value)
    {
        alert("Password and Re-type Password must be the same");
        RT5.style.border="1px solid red";
        RT5.focus();
        return;
    }
    
    var specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (!specialCharacterRegex.test(RT5.value)) {
        alert("Password must contain at least one special character");
        RT5.style.border = "1px solid red";
        RT5.focus();
        return;
    }

    // The rest of your registration code...

    var url = "http://localhost:5000/registration/signup";
    var data = JSON.stringify({
        firstname : RT1.value,
        lastname : RT2.value,
        contactno : RT3.value,
        emailid : RT4.value,
        pwd : RT5.value
    });
    callApi("POST", url,  data, registeredSuccess, registeredError);

    RT1.value="";
    RT2.value="";
    RT3.value="";
    RT4.value="";
    RT5.value="";
    RT6.value="";

    var login = document.getElementById('login');
    var registration = document.getElementById('registration');
    registration.style.display = 'none';
    login.style.display = 'block';
}


function registeredSuccess(res)
{
    var data = JSON.parse(res);
    alert(data);
}

function registeredError(res)
{
    alert(res);
}
function PasswordSuccess(res)
{
    var data = JSON.parse(res);
    alert(data);
}

function toggleLoginPopup() {
    var loginPopup = document.getElementById('login');
    if (loginPopup.style.display === 'none') {
        loginPopup.style.display = 'block';
    } else {
        loginPopup.style.display = 'none';
    }
}
function toggleRegistrationPopup() {
    var registrationPopup = document.getElementById('registration');
    if (registrationPopup.style.display === 'none') {
        registrationPopup.style.display = 'block';
    } else {
        registrationPopup.style.display = 'none';
    }
}

return(
    <div className='full-height'>
   <div id='header' className='loginheader'>
                   INDIAN CULTURE MANAGEMENT SYSTEM
                <label id='login-label' className='loginlabel' onClick={toggleLoginPopup}>
                SignIn
                </label>
                <label id='register-label' className='loginlabel' onClick={toggleRegistrationPopup}>
                    SignUp /
                </label>
                
            </div>
        <div id='content' className='logincontent'>
            <div id='login' className='popup'>
                <div id='popupwindow' className='popupwindow' style={popupwindowstyle} >
                    <div className='loginstyle1'>Login</div>
                    <div className='loginstyle2'>
                        <div style={logodivstyle}>
                            <img src={logo} alt='' style={logostyle} />
                        </div>
                        <div>Username*</div>
                        <div><input type='text' id='T1' className='txtbox' /></div>
                        <div style={space}></div>
                        <div>Password*</div>
                        <div><input type='password' id='T2' className='txtbox' /></div>
                        <div style={space}></div>
                        <div style={space}></div>
                        <div><button className='btn' onClick={validate}>Sign In</button></div>
                        <div style={space}></div>
                        <div style={space}></div>
                        <div style={space}></div>
                        <div>Forgot your password? <label className='linklabel' onClick={forgotPassword}>Reset it here</label></div><br></br>
                        <div>New user? <label className='linklabel' onClick={registration}>Register here</label></div><br></br>
                        </div>
                </div>
            </div>
            <div id='registration' className='popup'>
                <div id='registrationwindow' className='popupwindow'  style={popupwindowstyle}>
                    <div className='loginstyle1'>Sign Up</div>
                    <div className='loginstyle2'>
                        <div>First Name*</div>
                        <div><input type='text' id='RT1' className='txtbox' /></div>
                        <div style={space}></div>
                        <div>Last Name*</div>
                        <div><input type='text' id='RT2' className='txtbox' /></div>
                        <div style={space}></div>
                        <div>Contact Number*</div>
                        <div><input type='text' id='RT3' className='txtbox' /></div>
                        <div style={space}></div>
                        <div>Email ID*</div>
                        <div><input type='text' id='RT4' className='txtbox' /></div>
                        <div style={space}></div>
                        <div>Password*</div>
                        <div><input type='password' id='RT5' className='txtbox' /></div>
                        <div style={space}></div>
                        <div>Re-type Password*</div>
                        <div><input type='password' id='RT6' className='txtbox' /></div>
                        <div style={space}></div>
                        <div><button className='btn' onClick={register}>Register</button></div>

                        
                    </div>
                </div>
            </div>
            <div id='forgotpassword' className='popup'>
                    <div id='registrationwindow' className='popupwindow'  style={popupwindowstyle}>
                        <div className='loginstyle1'>Forgot Password</div>
                        <div className='loginstyle2'>
                        <div className='loginstyle1' style={{ textAlign: 'center' }}>Request password reset.</div><br></br>
                        <div>Please fill out your email. A link to reset password will be sent there.</div> <br></br><br></br>
                            <div>User Name*</div>
                            <div><input type='text' id='UT1' className='txtbox' /></div>
                            <div style={space}></div>
                            <div>New Password*</div>
                            <div><input type='passwor
                            d' id='UT2' className='txtbox' /></div>
                            <div style={space}></div>
                            <div>Confirm new Password*</div>
                            <div><input type='password' id='UT3' className='txtbox' /></div>
                            <div style={space}></div>
                            <div><button className='btn' onClick={password}>Submit</button></div>
                        </div>
                    </div>
                </div>

            </div>
            <div id='footer' className='loginfooter'>Copyright @ Indian Culure. All rights reserved.</div>
        </div>
    );
}

export default Login;