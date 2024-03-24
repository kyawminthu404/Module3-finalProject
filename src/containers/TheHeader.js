import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CImg,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
  CLink,
  CRow,
  CCol,
  CLabel,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import moment from "moment";
// routes config
import routes from "../routes";
import { useHistory } from "react-router-dom";
import {
  TheHeaderDropdown,
  TheHeaderDropdownMssg,
  TheHeaderDropdownNotif,
  TheHeaderDropdownTasks,
} from "./index";

const TheHeader = () => {
  const dispatch = useDispatch();
  const [realTime, setRealTime] = useState("");
  const [date, setDate] = useState("");
  const sidebarShow = useSelector((state) => state.sidebarShow);
  let history = useHistory();
  useEffect(() => {
    let today = new Date();
    const n = today.toDateString();
    setDate(n);
  }, []);

  const toggleSidebar = () => {
    const val = [true, "responsive"].includes(sidebarShow)
      ? false
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };

  const toggleSidebarMobile = () => {
    const val = [false, "responsive"].includes(sidebarShow)
      ? true
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };

  let time = moment().format("h:mm:ss A");
  setInterval(() => {
    time = moment().format("h:mm:ss A");
    setRealTime(time);
  }, 1000);





  return (
    <CHeader withSubheader>
      {/* <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <CIcon name="logo" height="48" alt="Logo" />
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/dashboard">Dashboard</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/users">Users</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink>Settings</CHeaderNavLink>
        </CHeaderNavItem>
      </CHeaderNav>

      <CHeaderNav className="px-3">
        <TheHeaderDropdownNotif />
        <TheHeaderDropdownTasks />
        <TheHeaderDropdownMssg />
        <TheHeaderDropdown />
      </CHeaderNav> */}

      <CSubheader className="px-3 ">
        <CToggler
          inHeader
          className="ml-md-3 d-lg-none "
          onClick={toggleSidebarMobile}
        />
        <CToggler
          inHeader
          className="ml-3 d-md-down-none"
          onClick={toggleSidebar}
        />
        <CBreadcrumbRouter
          className="border-0 c-subheader-nav m-0 px-0 px-md-3 "
          routes={routes}
        />
        <div className="d-md-down-none mfe-2 c-subheader-nav ">
          <CRow
            className="c-subheader-nav-link"
            style={{ position: "absolute", right: 0, marginRight: "0px" }}
          >
            {/* <CCol
              style={{
                minWidth: "15rem",
                color: "white",
                paddingTop: "5px",
                paddingBottom: "5px",
                borderRadius: "15px",
                boxShadow: "1px 2px 4px 0px",
                background: "#455261",
              }}
            >
              {date}&nbsp; &nbsp; {realTime}
            </CCol> */}
         
            <CCol
             style={{
              minWidth: "10rem",
              marginTop: "10px",
              color: "black",
              fontWeight: "bold"
             }}
            >
              <CLabel>
                {date} <br></br>{time}
              </CLabel>
            </CCol>
            
  
          </CRow>

          {/* <CLink className="c-subheader-nav-link" href="#">
            <CIcon name="cil-speech" alt="Settings" />
          </CLink>
          <CLink
            className="c-subheader-nav-link"
            aria-current="page"
            to="/dashboard"
          >
            <CIcon name="cil-graph" alt="Dashboard" />
            &nbsp;Dashboard
          </CLink>
          <CLink className="c-subheader-nav-link" href="#">
            <CIcon name="cil-settings" alt="Settings" />
            &nbsp;Settings
          </CLink> */}
        </div>
      </CSubheader>
    </CHeader>
  );
};

export default TheHeader;
