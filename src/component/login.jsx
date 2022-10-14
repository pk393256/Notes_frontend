import { Input, Button, Box,Divider,Grid } from '@mui/material';
import TextField from '@mui/material/TextField';

export function Login() {



    return (
        <>
        {/* <Grid container  direction='column' border='2px skyblue solid' 
        width='35%'
        marginLeft={'25%'}
        height={'70%'}
        > */}
            <h1 style={{marginLeft:'4%'}}>LOGIN</h1>
            {/* <TextField label='Outlined' variant="required"/> */}
            <Grid container 
            direction={'column'} 
            xs={3} 
            marginLeft={'40%'} 
            rowGap={1}
            
            >
                <TextField required label="Email" placeholder='Email' />
                <TextField required label="Password" placeholder='Password' />
                {/* <Input type='submit' /> */}
                <Button variant='contained'>Login</Button>
            </Grid >
        {/* </Grid> */}
        {/* </Box> */}
        </>
    )
}