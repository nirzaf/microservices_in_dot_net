import React, { Component, Fragment } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ItemForm from './ItemForm';
export default class ItemModal extends Component {
    state = {
        modal: false
    }
    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }));
    }
    render() {
        const isNew = this.props.isNew;
        let title = 'Edit Item';
        let button = '';
        if (isNew) {
            title = 'Add Item';
            button = <Button
                variant="primary"
                onClick={this.toggle}
                style={{ minWidth: "200px" }}>Add</Button>;
        } else {
            button = <Button
                variant="primary"
                onClick={this.toggle}>Edit</Button>;
        }
        return <Fragment>
            {button}
            <Modal show={this.state.modal} className={this.props.className} onHide={this.toggle}>
                <Modal.Header closeButton>{title}</Modal.Header>
                <Modal.Body>
                    <ItemForm
                        addItemToState={this.props.addItemToState}
                        updateItemIntoState={this.props.updateItemIntoState}
                        toggle={this.toggle}
                        item={this.props.item} />
                </Modal.Body>
            </Modal>
        </Fragment>;
    }
}