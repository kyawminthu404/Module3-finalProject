import React from 'react';
import {CRow,CButton,CModal,CModalBody,CButtonToolbar} from '@coreui/react';

const Confirmation = props => {
    return (
        <>
            <CModal centered closeOnBackdrop={false} show={props.show} style={{boxShadow: 'rgb(0 0 0 / 25%) 0px 3px 7px'}}>
                <CModalBody className="m-body">
                    <CRow className="confirm-header mt-3" alignHorizontal="center">
                        <p className="modal-p text-center">{props.content}</p>
                    </CRow>
                    <CButtonToolbar className="confirm-body" justify="center">
                        <CButton className="ok-confirm-btn" onClick={
                            (props.type === 'save') ? props.saveOK :
                            (props.type === 'save-data') ? props.saveConfirmData :
                            (props.type === 'update') ? props.updateOK : props.deleteOK 
                        }>{props.okButton}</CButton>
                    <CButton className="cancel-confirm-btn" style={{marginLeft: "60px"}} onClick={props.cancel}>{props.cancelButton}</CButton>
                    </CButtonToolbar>
                </CModalBody>
            </CModal>
        </>
    )
}
export default Confirmation
