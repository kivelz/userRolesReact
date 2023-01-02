import React, { useEffect } from 'react';
import logo from './logo.svg';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box, Divider, Drawer, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';


import { useState } from "react";
import AddUsefulContact from './AddUserContact';

interface IUserContactProps { }

const UsefulContacts: React.FunctionComponent<IUserContactProps> = (props) => {
    return (

        <div className="container" style={{ backgroundColor: '#FFF', padding: 24 }}>
            <div style={{ flex: 1 }}>
                <h2>Useful contacts</h2>
                <span>For tenants to contact the relevant personnels when the situation requires.</span>
            </div>
            <Divider className="divider" sx={{ borderColor: "#CED0D3" }}></Divider>

            <form >
                <div>
                    <span className='subTitle' >Management Office</span>
                </div>
                <div style={{ flexDirection: 'row', display: 'flex', flex: 1 }}>
                    <div style={{ flex: 1 }}>
                        <div className='textBoxTitleSpace'>
                            <span className='textBoxLabel' style={{ color: '#6A717B' }}>Telephone Number</span>
                        </div>
                        <TextField id="outlined-basic" variant="outlined" fullWidth size='small' style={{ paddingRight: 24 }} placeholder='+65 2544 8741' />
                        <div >
                            <div className='textBoxTitleSpace'>
                                <span className='textBoxLabel' style={{ color: '#6A717B' }}>Opening Hours</span>
                            </div>
                            <TextField id="outlined-basic" variant="outlined" fullWidth size='medium' style={{}} />
                        </div>
                    </div>

                    <div style={{ flex: 1 }}>
                        <div className='textBoxTitleSpace'>
                            <span className='textBoxLabel' style={{ color: '#6A717B' }}>Email (if applicable)</span>
                        </div>
                        <TextField id="outlined-basic" variant="outlined" fullWidth size='small' style={{}} />
                    </div>
                </div>
                <Divider className="divider" sx={{ borderColor: "#CED0D3" }}></Divider>
                <div>
                    <span className='subTitle' >Security</span>
                </div>
                <div style={{ flexDirection: 'row', display: 'flex', flex: 1 }}>

                    <div style={{ flex: 1 }}>
                        <div className='textBoxTitleSpace'>
                            <span className='textBoxLabel' style={{ color: '#6A717B' }}>Telephone Number</span>
                        </div>
                        <TextField id="outlined-basic" variant="outlined" fullWidth size='small' style={{ paddingRight: 24 }} placeholder='+65 2544 8741' />
                        <div >
                            <div className='textBoxTitleSpace'>
                                <span className='textBoxLabel' style={{ color: '#6A717B' }}>Opening Hours</span>
                            </div>
                            <TextField id="outlined-basic" variant="outlined" fullWidth size='medium' style={{}} />
                        </div>
                    </div>

                    <div style={{ flex: 1 }}>
                        <div className='textBoxTitleSpace'>
                            <span className='textBoxLabel' style={{ color: '#6A717B' }}>Email (if applicable)</span>
                        </div>
                        <TextField id="outlined-basic" variant="outlined" fullWidth size='small' style={{}} />
                    </div>
                </div>
                <div>
                    <span className='subTitle' >Security</span>
                </div>
                <div style={{ flexDirection: 'row', display: 'flex', flex: 1 }}>

                    <div style={{ flex: 1 }}>
                        <div className='textBoxTitleSpace'>
                            <span className='textBoxLabel' style={{ color: '#6A717B' }}>Telephone Number</span>
                        </div>
                        <TextField id="outlined-basic" variant="outlined" fullWidth size='small' style={{ paddingRight: 24 }} placeholder='+65 2544 8741' />
                        <div >
                            <div className='textBoxTitleSpace'>
                                <span className='textBoxLabel' style={{ color: '#6A717B' }}>Opening Hours</span>
                            </div>
                            <TextField id="outlined-basic" variant="outlined" fullWidth size='medium' style={{}} />
                        </div>
                    </div>

                    <div style={{ flex: 1 }}>
                        <div className='textBoxTitleSpace'>
                            <span className='textBoxLabel' style={{ color: '#6A717B' }}>Email (if applicable)</span>
                        </div>
                        <TextField id="outlined-basic" variant="outlined" fullWidth size='small' style={{}} />
                    </div>
                </div>

                <div style={{ flex: 1 }}>
                    <div className='textBoxTitleSpace'>
                        <span className='textBoxLabel' style={{ color: '#6A717B' }}>Email (if applicable)</span>
                    </div>
                    <TextField id="outlined-basic" variant="outlined" fullWidth size='small' style={{}} />
                </div>
                <AddUsefulContact />
            </form>
        </div>


    )



}
export default UsefulContacts
