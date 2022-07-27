import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Icon, Label, Menu, Table, Button } from 'semantic-ui-react';


function Read() {
  const [getApi, setGetApi] = useState([])

  useEffect(() => {
    axios.get("https://62e11a17fa8ed271c48ee546.mockapi.io/Crud")
    .then((getData) => setGetApi(getData.data))
  }, [])

  return (
    <Table celled>
    <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Notes</Table.HeaderCell>
          <Table.HeaderCell>Update</Table.HeaderCell>
          <Table.HeaderCell>Delete</Table.HeaderCell>
        
        
      </Table.Row>
    </Table.Header>

      <Table.Body>
        { getApi.map((data) => {
          return (
            <Table.Row>
              <Table.Cell>{data.firstName}</Table.Cell>
              <Table.Cell>{data.lastName}</Table.Cell>
              <Table.Cell>Requires call</Table.Cell>
              <Table.Cell>
                <Button color = "blue">Update</Button>
              </Table.Cell>
              <Table.Cell>
                <Button color = "red">Delete</Button>
              </Table.Cell>
            </Table.Row>

          )
        })}
      
    </Table.Body>
  </Table>
      
      
  )
}

export default Read