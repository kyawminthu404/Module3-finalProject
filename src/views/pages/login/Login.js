import React from 'react'
import {CCard,CCardBody,CCol,CContainer,CImg,CInput,CInputGroup,CInputGroupPrepend,CInputGroupText,CLabel,CRow,CButton} from '@coreui/react'
/**
 * Main Component
 * @author Phyoe Wai Aung
 * @create 21/09/2022
 * @modify 
 * @returns output shown in web page
*/
const Login = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center login-bg">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <CCard className="login">
            <CCardBody>
              <CRow alignHorizontal='center'>
               <CImg src='./image/dining.jpg' width={100} height={100}></CImg>
              </CRow>
              <CRow alignHorizontal='center' className="mb-4">
                <h3 className='login-title'>Restaurant Management System</h3>
              </CRow>
              <CRow className="mb-4 align-items-center">
                <CCol lg="4"><CLabel className="form-label">Shop Code</CLabel></CCol>
                <CCol lg="8">
                  <CInputGroup>
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CImg src='./image/shop_code.png' width={20} height={20}></CImg>
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type='text'></CInput>
                  </CInputGroup>
                </CCol>
              </CRow>
              <CRow className="mb-4 align-items-center">
                <CCol lg="4"><CLabel className="form-label">Password</CLabel></CCol>
                <CCol lg="8">
                <CInputGroup>
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CImg src='./image/password.png' width={20} height={20}></CImg>
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type='text'></CInput>
                  </CInputGroup>
                </CCol>
              </CRow>
              <CRow alignHorizontal='end' className="mb-4">
                <CButton className='form-btn login-btn'>Login</CButton>
              </CRow>
              <hr />
              <CRow alignHorizontal='center' className="mt-4 mb-2">
                <CLabel className='forgot-password cursor-style'>Forgot Password?</CLabel>
              </CRow>
            </CCardBody>
          </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
