import axios from 'axios';
import React, {useState} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const Create = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")


    console.log(firstName)
    console.log(lastName)

    const sendDatatoAPI = () => {
        let url = "https://62e11a17fa8ed271c48ee546.mockapi.io/Crud"
        
            axios.post(url, {
                firstName,
                lastName
            })       
        
    }

    return (
        <Form>
        <Form.Field>
          <label>First Name</label>
          <input onChange={(e)=> setFirstName(e.target.value)} name = "fname" placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
            <input onChange={(e)=> setLastName(e.target.value)} name="lname" placeholder='Last Name'
                
            />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button onClick={sendDatatoAPI} type='submit'>Submit</Button>
      </Form>
    )
}
export default Create
