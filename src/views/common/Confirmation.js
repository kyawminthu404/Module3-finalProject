import React from 'react';
import {CRow,CButton,CModal,CModalBody,CButtonToolbar} from '@coreui/react';

/**
 * To show confirmation popup for save/edit/delete/active
 *
 * @author  
 * @create  
 * @param   {content} props => confirmation message. Eg: 'Are you sure want to save?'
 *          {okButton} props => to show `OK` button in popup
 *          {cancelButton} props => to show `Cancel` button in popup
 *          {type} props => to decide which action(save,edit,delete,active) for this popup
 *          {show} props => to show/hide popup box
 *          {cancel} props => to hide popup box when user click `Cancel` button
 *          saveOK={FUNCTION_NAME} props => `saveOK` key must be change based on user action.
 *                                          for save -> saveOK={FUNCTION_NAME}
 *                                          for confirm -> confirmOK={FUNCTION_NAME}
 *                                          for update -> updateOK={FUNCTION_NAME}
 *                                          for delete -> deleteOk={FUNCTION_NAME}
 *                                          for edit -> editOK={FUNCTION_NAME}
 *                                          for rehire -> rehireOK={FUNCTION_NAME}
 *                                          for resign -> resignOK={FUNCTION_NAME}
 *                                          for active -> activeOK={FUNCTION_NAME}
 *                                          for inactive -> inactiveOK={FUNCTION_NAME}
 * @returns output shown in web page

 */
const Confirmation = props => {
    return (
        <>
            <CModal centered closeOnBackdrop={false} show={props.show} style={{boxShadow: 'rgb(0 0 0 / 25%) 0px 3px 7px'}}>
                <CModalBody className="m-body">
                    <CRow className="confirm-header mt-3" alignHorizontal="center">
                        <p className="modal-p text-center" style={{fontSize: "20px",fontWeight: "bold"}}>{props.content}</p>
                    </CRow>
                    <CButtonToolbar className="confirm-body mt-4" justify="center">
                        <CButton className="ok-btn" onClick={
                            (props.type === 'sendMail') ? props.sendMailOK :
                            (props.type === 'save') ? props.saveOK :
                            (props.type === 'owsave') ? props.owsaveOK :
                            (props.type === 'confirm') ? props.confirmOK :
                            (props.type === 'update') ? props.updateOK :
                            (props.type === 'delete') ? props.deleteOK :
                            (props.type === 'export') ? props.exportOK :
                            (props.type === 'edit') ? props.editOK :
                            (props.type === 'rehire') ? props.rehireOK :
                            (props.type === 'resign') ? props.resignOK :
                            (props.type === 'active') ? props.activeOK : props.inactiveOK
                        }>{props.okButton}</CButton>
                    <CButton className="cancel-btn" style={{marginLeft: "45px"}} onClick={props.cancel}>{props.cancelButton}</CButton>
                    </CButtonToolbar>
                </CModalBody>
            </CModal>
        </>
    )
}
export default Confirmation
