import { CButton, CCol, CInput, CLabel, CRow, CSelect, CImg, CInputGroup, CInputGroupPrepend, CInputGroupText,} from '@coreui/react'
import React from 'react';
import NPagination from '../../common/pagination/NPagination';
import CIcon from '@coreui/icons-react';

function EmployeeListForm(props) {
  let { userName, userNameChange, genderData, selectGender, selectGenderChange,
    searchClick, employeeList, total,
    currentPage, lastPage, pagination,
    editClick, delClick } = props;
  return (
    <div className='mt-4'>
      <CRow alignHorizontal='center' className="mb-3">
        <CCol lg="6">
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="3">
              <p className='mt-2' style={{fontFamily: "monospace", fontSize:"large"}}>UserName</p>
            </CCol>
            <CCol lg="7">
            <CInputGroup>
                        <CInputGroupPrepend>
                          <CInputGroupText style={{backgroundColor: "#394250", color: "#fff"}}>
                           <CIcon name='cil-User'/>
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type='text' value={userName} onChange={userNameChange} required/>
                    </CInputGroup>
            </CCol>
            <CCol lg="1"></CCol>
          </CRow>
        </CCol>
        <CCol lg="6">
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="3">
              <p className='mt-2'style={{fontFamily: "monospace", fontSize:"large"}}>Gender</p>
            </CCol>
            <CCol lg="7">
              <CSelect
                value={selectGender}
                onChange={selectGenderChange}
              >
                <option value="">-- Select --</option>
                {genderData.map((data, index) => {
                  return (
                    <option
                      key={index}
                      value={data.name}
                    >
                      {data.name}
                    </option>
                  )
                }
                )}
              </CSelect>
            </CCol>
            <CCol lg="1"></CCol>
          </CRow>
        </CCol>
      </CRow>
      <CRow alignHorizontal="center" className="mt-5">
        <CButton className="form-btn" onClick={searchClick}>
          Search
        </CButton>
      </CRow>
      <CRow className='mt-5'>
        <CCol>
          {employeeList.length > 0 && (
            <>
              <p className='mb-0 font-weight-bold'>Total : {total} row(s)</p>
              <div className='overflow'>
                <table className='emp-list-table'>
                  <thead>
                    <tr>
                      <th className="text-center" width={50} >No</th>
                      <th className='text-center' width={180}>UserName</th>
                      <th className='text-center' width={250}>Email</th>
                      <th className='text-center' width={200}>Date Of Birth</th>
                      <th className='text-center' width={150}>Gender</th>
                      <th className='text-center' width={135}>EmployeeId</th>
                      <th className='text-center' width={230}>English Skill</th>
                      <th className='text-center' width={150}>Japanese Skill</th>
                      <th className='text-center' width={80} colSpan={2}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employeeList.map((data, index) => {
                      return (
                        <tr key={index}>
                          <td width={50} className="text-center">{index + 1}</td>
                          <td className="text-center">{data.name}</td>
                          <td className="text-center"> {data.email}</td>
                          <td className='text-center' >{data.date_of_birth}</td>
                          <td className='text-center'>{data.gender}</td>
                          <td className='text-center'>{data.id}</td>
                          <td className="text-center">{data.english_skill}</td>
                          <td className="text-center">{data.japanese_skill}</td>
                          <td style={{ textAlign:"center"}}>
                              <div className="user-before">
                                <CImg
                                  src="/image/Edit-Component-inactive.svg"
                                  onClick={() => {
                                    editClick(data.id);
                                  }}
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    cursor: "pointer",
                                  }}
                                ></CImg>
                                <CImg
                                  className="user-after"
                                  src="/image/Edit-Component-active.svg"
                                  onClick={() => { editClick(data.id);}}
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    cursor: "pointer",
                                  }}
                                ></CImg>
                              </div>
                            </td>

                            <td style={{textAlign:"center"}}>
                              <div className="user-before">
                                <CImg
                                  src="/image/Delete-Component-inactive.svg"
                                  onClick={() => delClick(data.id)}
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    cursor: "pointer",
                                  }}
                                ></CImg>
                                <CImg
                                  className="user-after"
                                  src="/image/Delete-Component-active.svg"
                                  onClick={() => delClick(data.id)}
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    cursor: "pointer",
                                  }}
                                ></CImg>
                              </div>
                            </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </>

          )}

        </CCol>
      </CRow>
      <br></br>
      {total > 10 &&
        <NPagination
          activePage={currentPage}
          pages={lastPage}
          currentPage={currentPage}
          totalPage={lastPage}
          pagination={pagination}
        />
      }
    </div>
  )
}

export default EmployeeListForm
