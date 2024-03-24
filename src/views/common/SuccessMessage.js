import React ,{useEffect} from 'react';
import {CButton, CCard} from '@coreui/react';

const SuccessMessage=props=> {
    useEffect(() => {
    },);

    return (<>
        {props.success && props.success.length > 0 &&
            <CCard id={props.id} className="custom-card success p-3 mt-4 mb-3">
                <div className = "msg">{ props.success }
                </div>
            </CCard>
        }
    </>
    );
}
export default SuccessMessage;