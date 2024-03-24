import {
    CCol,
    CPagination,
    CRow,
    CInput,
    CLabel
} from "@coreui/react"
import React from 'react'
import { validateIntegerOnly } from "../CommonValidation"


const NPagination = props => {

	const onChange = (i) => {
		let maxPage = i.currentTarget.getAttribute('max');
		let pageNum = i.currentTarget.value;
		let userInput = i.target.value;

	    if (validateIntegerOnly(userInput) && userInput <= parseInt(maxPage) && userInput != 0) {
	        props.pagination(pageNum ? parseInt(pageNum) : 1)
	    }
	}

	return(
		<div className='pagination-container'>
			<CRow className="mt-2">
				<CCol className='offset-lg-3 offset-xs-0 offset-sm-0 mb-1 justify-content-start justify-content-sm-center p-0' xs="12" sm="8" lg="5">
					<CPagination
						activePage={props.currentPage}
						pages={props.totalPage || 1}
						dots={false}
						arrows={true}
						align="center"
						previousButton="<"
						nextButton=">"
						firstButton="First page"
						lastButton="Last page"
						onActivePageChange={(i) => props.pagination(i)}
					/>
				</CCol>
				<CCol xs="12" sm="4" lg="4" className='d-flex align-items-center justify-content-end mb-1 pr-5'>
					<CLabel className='mb-0'>Page</CLabel>
					<CCol xs="4" sm="6" lg="5" xxl="3">
						<CInput
							value={props.currentPage || 1}
							onChange={onChange}
							max={props.totalPage || 1}
							onClick={(i) => {
								i.currentTarget.select();
							}}
						/>
					</CCol>
					<CLabel className='mb-0'>
						{`of ${props.totalPage || 1}`}
					</CLabel>
				</CCol>
			</CRow>
		</div>
	)
}

export default React.memo(NPagination)
