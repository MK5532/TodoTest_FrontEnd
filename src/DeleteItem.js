import React from 'react';
import { IconButton } from "@material-ui/core";
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';

class DeleteItem extends React.Component {
    constructor(props) {
        super(props);
        this.deleteComplete = props.deleteComplete;
    }

    deleteCompletedEventHandler = () => {
        this.deleteComplete();

    }

    render() {
        return (
            <div>
                Delete Completed Item
                <IconButton aria-label="Delete"
                    onClick={this.deleteCompletedEventHandler}>
                    <DeleteOutlined />
                </IconButton>
            </div>
        );
    }
}

export default DeleteItem;