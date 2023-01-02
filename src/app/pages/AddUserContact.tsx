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
    const handleClick = () => {

        setAddUserContact((current: any) => [...current, { name: 'dsad', telNo: '625465847' }]);
    };

    return (
        <div style={{ flex: 1 }}>

            {userContact.map((item, index) => (
                <div style={{ paddingTop: 24, paddingBottom: 24, flex: 1 }}>
                    <div>
                        {`Useful Contact` + ' ' + (index)}
                    </div>
                    <div style={{ flexDirection: 'row', display: 'flex', flex: 1 }}>
                        <div style={{ flex: 1 }}>
                            <div className='textBoxTitleSpace'>
                                <span className='textBoxLabel' style={{ color: '#6A717B' }}>Name:</span>
                            </div>
                            <TextField id="outlined-basic" variant="outlined" fullWidth size='small' style={{ paddingRight: 24 }} placeholder={item.name ? item.name : 'eg. Police Hotline'} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <div className='textBoxTitleSpace'>
                                <span className='textBoxLabel' style={{ color: '#6A717B' }}>Telephone Number)</span>
                            </div>
                            <TextField id="outlined-basic" variant="outlined" fullWidth size='small' style={{}} placeholder={item.telNo ? item.telNo : 'eg. 999'} />
                        </div>
                    </div>
                </div>
            ))}
            <div style={{ display: 'flex' }}>
                <Button style={{ alignSelf: 'flex-end', alignItems: 'fkex-end', justifyContent: 'flex-end', marginLeft: 'auto' }} onClick={() => handleClick()} >Add Contact</Button>
            </div>

        </div>
    )
}

export default AddUsefulContact