import React, { Component, Fragment } from 'react';
import { Button, Modal } from 'react-bootstrap';
import GrantItemForm from './GrantItemForm';
export default class GrantItemModal extends Component
{
    state = {
        modal: false
    }
    toggle = () =>
    {
        this.setState(previous => ({
            modal: !previous.modal
        }));
    }
    render()
    {
        return <Fragment>
            <Button variant="primary" onClick={this.toggle}>Grant</Button>
            <Modal show={this.state.modal} className={this.props.className} onHide={this.toggle}>
                <Modal.Header closeButton>Grant {this.props.item.name}</Modal.Header>
                <Modal.Body>
                    <GrantItemForm
                        toggle={this.toggle}
                        item={this.props.item}/>
                </Modal.Body>
            </Modal>
        </Fragment>;
    }
}