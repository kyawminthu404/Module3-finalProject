import React from "react";
import { Markup } from "interweave";
import { CCard, CImg } from "@coreui/react";

/**
 * To show error and success message
 *
 * @author  Nay Zaw Linn, Zin Min Myat
 * @create  06/04/2021
 * @param   {error} props => for error message
 *          {error2} props => for error2 message
 *          {success} props => for success message
 * @returns output shown in web page
 */

const SuccessError = (props) => {
  return (
    <>
      {
        // to show error message
        props.error?.length > 0 && (
          <CCard className="custom-card error  p-3 mb-3">
            {Array.from(new Set(props.error)).map((data, index) => {
              return (
                <div key={index}>
                  <CImg src='/image/error.svg' width={15} className="mr-1"/>
                  <Markup content={data} />
                </div>
              );
            })}
          </CCard>
        )
      }
      {
        // to show success message
        props.success?.length > 0 && (
          <CCard className="custom-card success p-3 mb-3">
            {props.success.map((data, index) => {
              return (
                <div key={index}>
                  <CImg src='/image/success.svg' width={17} className="mr-1"/>
                  <Markup content={data} />
                </div>
              );
            })}
          </CCard>
        )
      }
    </>
  );
};
export default SuccessError;
