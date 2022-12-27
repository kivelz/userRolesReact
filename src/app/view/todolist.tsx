import { Divider, TextField } from '@mui/material';
import React, { FC } from 'react';


function ToDoList() {
    return (
        <div style={{ backgroundColor: '#FFF' }}>
            <Divider className="divider" sx={{ borderColor: "#CED0D3" }}></Divider>
            <h2>Useful Contacts 1</h2>
            <div style={{ flexDirection: 'row', display: 'flex', flex: 1, margin: 24 }}>
                <div style={{ flex: 1 }}>
                    <div className='textBoxTitleSpace'>
                        <span className='textBoxLabel' style={{ color: '#6A717B' }}>Name</span>
                    </div>
                    <TextField id="outlined-basic" variant="outlined" fullWidth size='small' style={{ paddingRight: 24 }} placeholder='+65 2544 8741' />
                    <div >
                    </div>
                </div>
                <div style={{ flex: 1 }}>
                    <div className='textBoxTitleSpace'>
                        <span className='textBoxLabel' style={{ color: '#6A717B' }}>Telephone</span>
                    </div>
                    <TextField id="margin-none" variant="outlined" fullWidth size='small' style={{}} />
                </div>
            </div>
        </div>
    )
}

export default ToDoList;