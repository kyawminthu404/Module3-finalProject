import React, { useEffect } from 'react';
import { CButton, CCard } from '@coreui/react';

const ErrorMessage = props => {
    useEffect(() => {
    });

    return (<>
        {props.error && props.error.length > 0 &&
            <CCard id={props.id} className="custom-card error p-3 mt-4 mb-3">
                {
                    props.error.map((data, index) => {
                        return (
                            <div key={index} className="msg">
                                {data}
                            </div>
                        )
                    })}
            </CCard>
        }
    </>
    );
}
export default ErrorMessage;
