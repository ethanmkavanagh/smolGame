import React, {Component} from 'react';
import {connect} from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {withRouter} from 'react-router-dom';
import {TextField, Button, Grid, Paper} from '@material-ui/core';

import './AddPlayer.css';

class AddPlayer extends Component {

    // State
    state = {
        name: '',
        number: '',
        position: '',
        age: '',
        height: '',
        weight: ''
    } // end state

    // Set state to inputs
    onChange = (event, propertyName) => {
        this.setState({
            ...this.state,
            [propertyName]: event.target.value
        });
    } // end onChange

    // Add player to DB
    onAddPlayer = () => {
        this.props.dispatch({
            type: 'CREATE_NEW_PLAYER',
            payload: this.state
        });
        this.setState({
            name: '',
            number: '',
            position: '',
            age: '',
            height: '',
            weight: ''
        });
        this.props.history.push('/home');
    } // end onAddPlayer

    render() {
        return (
            <Paper
                elevation={3}
                className="addPlayerPaper"
            >
                <h1 className="title">Add Player Form</h1>
                <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                    className="form"
                >
                    {/* Inputs for the New Player */}
                    <Grid 
                        item
                        xs={2}
                    >
                        <div className="addPlayerForm">
                            <TextField
                                className="input"
                                id="outlined-basic"
                                label="Name" 
                                variant="outlined"
                                type="text"
                                placeholder="Name"
                                required
                                onChange={(event) => this.onChange(event, "name")}
                            />
                        </div>

                        <div className="addPlayerForm">
                            <TextField
                                className="input"
                                id="outlined-basic"
                                label="Number" 
                                variant="outlined"
                                type="number"
                                placeholder="Number"
                                required
                                onChange={(event) => this.onChange(event, "number")}
                            />
                        </div>
                    </Grid>

                    <Grid 
                        item 
                        xs={2}
                    >
                        <div className="addPlayerForm">
                            <TextField
                                className="input"
                                id="outlined-basic"
                                label="Position" 
                                variant="outlined"
                                type="text"
                                placeholder="Position"
                                required
                                onChange={(event) => this.onChange(event, "position")}
                            />
                        </div>

                        <div className="addPlayerForm">
                            <TextField
                                className="input"
                                id="outlined-basic"
                                label="Age" 
                                variant="outlined"
                                type="number"
                                placeholder="Age"
                                required
                                onChange={(event) => this.onChange(event, "age")}
                            />
                        </div>
                    </Grid>

                    <Grid 
                        item 
                        xs={2}
                    >
                        <div className="addPlayerForm">
                            <TextField
                                className="input"
                                id="outlined-basic"
                                label="Height" 
                                variant="outlined"
                                type="text"
                                placeholder="Height"
                                required
                                onChange={(event) => this.onChange(event, "height")}
                            />
                        </div>

                        <div className="addPlayerForm">
                            <TextField
                                className="input"
                                id="outlined-basic"
                                label="Weight" 
                                variant="outlined"
                                type="text"
                                placeholder="Weight"
                                required
                                onChange={(event) => this.onChange(event, "weight")}
                            />
                        </div>
                    </Grid>
                </Grid>

                <Grid 
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="flex-start"
                >
                    <Grid 
                        item 
                        xs={1}
                        className="editBtn"
                    >
                        {/* Button to submit New Player */}
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={this.onAddPlayer}
                        >
                            Add
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        ); // end return
    } // end render
} // end Component

export default connect(mapStoreToProps)(withRouter(AddPlayer));
