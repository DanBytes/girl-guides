import React, { Component } from 'react';
import logo from '../logo.svg'
import { Paper, Button, TextField } from '@material-ui/core'


const style = {
    Paper: {
        'width': '500px',
        'margin': '10% auto 0 auto',
        'textAlign': 'center',
        'padding': '5%'

    }
}

class SigninForm extends Component {

    render() {
        return (
            <Paper style={style.Paper}>
                <img src={logo}></img>
                <form>
                    {/* <input type='email' id='email' name="email" placeholder='Enter your email' required /><br /> */}
                    {/* <input type='password' id='password' name="password" placeholder='Password' required /><br /> */}

                    <TextField
                        required
                        id="standard-required"
                        label="Email"
                        margin="normal"
                        type="email"
                    />
                    <br />
                    <TextField
                        required
                        id="standard-required"
                        label="Password"
                        margin="normal"
                        type="password"
                    />
                    <br />
                    <Button type="submit" variant="contained" color="primary">Sign In</Button>
                    <Button type="button" variant='contained' color="primary" style={{ 'backgroundColor': 'orange' }}>Register</Button>
                </form>

            </Paper>
        )
    }
}

export default SigninForm
