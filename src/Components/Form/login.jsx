import React from 'react'
import { Button, Form } from 'react-bootstrap'

const Login = () => {
    return (
        <>
            <div className='w-1/2 '>
                <h2 className='text-3xl text-center font-bold my-20'>Firebase Auth Login</h2>
                <Form className='text-right'>
                    <Form.Group controlId="formBasicEmail">
                    <Form.Control className='outline-none w-3/4 my-2 border-2 border-blue-600 rounded p-1 ' type='email' placeholder='Email adrees' />

                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control className='outline-none w-3/4 my-2 border-2 border-blue-600 rounded p-1' type='password' placeholder='Password' />

                </Form.Group>
                <div className='text-right'>
                    <Button className='bg-blue-600 ml-auto w-1/2 text-center text-white rounded p-1 px-2' variant='primary' type='submit'>
                        Log In
                    </Button>
                </div>
                </Form>
            </div>
        </>
    )
}

export default Login
