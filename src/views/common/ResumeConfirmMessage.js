import React from "react";
import {
  CRow,
  CButton,
  CModal,
  CModalBody,
  CButtonToolbar,
} from "@coreui/react";
import { Markup } from "interweave";

const ResumeConfirmMessage = (props) => {
  return (
    <>
      <CModal
        centered
        onClose={props.cancel}
        closeOnBackdrop={false}
        show={props.show}
        style={{ boxShadow: "rgb(0 0 0 / 25%) 0px 3px 7px" }}
      >
        <CModalBody className="m-body">
          <CRow className="ml-3 mt-3">
            <Markup content={props.header} />
          </CRow>
          <CRow className="mt-3 ml-3">
            <Markup content={props.content} />
          </CRow>
          <CButtonToolbar className="confirm-body confirmbox-btn" justify="end">
            <CButton className="cancel-confirm-btn" onClick={props.cancel}>
              {props.cancelButton}
            </CButton>
            <CButton
              className={
                props.type === "save"
                  ? "save-confirm-btn ml-3 mr-4"
                  : props.type === "save-data"
                  ? "save-confirm-btn ml-3 mr-4"
                  : props.type === "update"
                  ? "save-confirm-btn ml-3 mr-4"
                  : "delete-confirm-btn ml-3 mr-4"
              }
              onClick={
                props.type === "save"
                  ? props.saveOK
                  : props.type === "save-data"
                  ? props.saveConfirmData
                  : props.type === "update"
                  ? props.updateOK
                  : props.deleteOK
              }
            >
              {props.okButton}
            </CButton>
          </CButtonToolbar>
        </CModalBody>
      </CModal>
    </>
  );
};
export default ResumeConfirmMessage;
