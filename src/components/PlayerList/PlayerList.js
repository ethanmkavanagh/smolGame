import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {TableRow, TableCell, Button} from '@material-ui/core';
import mapStoreToProps from '../../redux/mapStoreToProps';

import '../HomePage/HomePage.css';

class PlayerList extends Component {

    onPlayerProfile = () => {
        this.props.dispatch({
            type: 'FETCH_INDIVIDUAL_PLAYER',
            payload: this.props.player.id
        });
        this.props.history.push('/player-profile');
    }

    onDelete = (id) => {
        this.props.dispatch({
            type: 'DELETE_PLAYER',
            payload: id
        });
    }

    render() {
        return (
            <TableRow key={this.props.player.id}>
                <TableCell 
                component="th"
                scope="row"
                className="playerListTable"
                onClick={this.onPlayerProfile}
                >
                {this.props.player.name}
                </TableCell>
                <TableCell 
                align="center"
                className="playerListTable"
                onClick={this.onPlayerProfile}
                >
                {this.props.player.number}
                </TableCell>
                {this.props.store.user.authLevel === 'ADMIN' ?
                <TableCell 
                    align="center"
                    className="playerListTable"
                >
                    <Button 
                        color="secondary"
                        onClick={() => this.onDelete(this.props.player.id)}
                    >
                        Delete
                    </Button>
                </TableCell> :
                <TableCell className="playerListTable"></TableCell>
                }
            </TableRow>
        );
    }
}
export default connect(mapStoreToProps)(withRouter(PlayerList));