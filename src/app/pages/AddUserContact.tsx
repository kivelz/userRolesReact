import React, { useEffect } from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TextField } from '@mui/material';
import { Button } from 'react-bootstrap';


interface IAddUserContact {

}


let contactInfo = [
    { name: "", telNo: "" },
    { name: "", telNo: "" },
    { name: "", telNo: "" },
]

const AddUsefulContact: React.FunctionComponent<IAddUserContact> = (props) => {
    const [userContact, setAddUserContact] = React.useState(contactInfo)

    return (
        <div style={{ flex: 1, }}>
            {userContact.map((item, index) => (
                <div style={{ paddingTop: 24, paddingBottom: 24 }}>
                    <div>
                        {`Useful Contact` + ' ' + (index)}
                    </div>
                    <div style={{ flexDirection: 'row', display: 'flex', flex: 1 }}>
                        <div style={{ flex: 1 }}>
                            <div className='textBoxTitleSpace'>
                                <span className='textBoxLabel' style={{ color: '#6A717B' }}>Name:</span>
                            </div>
                            <TextField id="outlined-basic" variant="outlined" fullWidth size='small' style={{ paddingRight: 24 }} placeholder='+65 2544 8741' />
                        </div>
                        <div style={{ flex: 1 }}>
                            <div className='textBoxTitleSpace'>
                                <span className='textBoxLabel' style={{ color: '#6A717B' }}>Telephone Number)</span>
                            </div>
                            <TextField id="outlined-basic" variant="outlined" fullWidth size='small' style={{}} />
                        </div>
                    </div>
                </div>
            ))}
            <Button onClick={() => alert('in progress')} >Add Contact</Button>
        </div>
    )
}

export default AddUsefulContact