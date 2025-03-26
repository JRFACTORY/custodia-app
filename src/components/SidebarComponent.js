import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/components/SidebarComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faScrewdriverWrench, faUserGroup, faTruckField, faCartShopping, faClipboard, faImages} from "@fortawesome/free-solid-svg-icons"; /* Iconos del menú*/
import { faChevronCircleDown, faChevronCircleUp, faPowerOff, faChevronLeft, faChevronRight, faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

const SidebarComponent = () => {

  const [open, setOpen] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [visibleClass, setVisibleClass] = useState(""); 
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
    setVisibleClass(sidebarVisible ? "d-none" : "");
  };

  return (
    <>
     <button title="Visualizar menú" className="toggle-btn" style={{ left: sidebarVisible ? "286px" : "51px" }} onClick={toggleSidebar}>
        <FontAwesomeIcon icon={sidebarVisible ? faChevronLeft : faChevronRight} />
      </button>
      <aside className="sidebar" style={{ width: sidebarVisible ? "300px" : "65px" }}>
        <div className="logo">
          <img src="/img/logo-entidad.png" style={{ width: sidebarVisible ? "150px" : "50px", height: sidebarVisible ? "150px" : "auto", }}alt="Logo de Entidad" />
        </div>
        <ul>
          <li><h6 className={`mt-2 ${visibleClass}`} style={{ fontSize: "11px", fontWeight: "bold", color: "#babfc9", margin: "0px", paddingLeft: "11px" }}>MÓDULOS GENERALES</h6></li>
          <li title="Inicio"  className={`mt-2 sidebar-item ${location.pathname.includes("/dashboard") ? "active" : ""}`} onClick={() => setOpen(false)}>
            <Link to="/dashboard"> <FontAwesomeIcon className="pe-3" icon={faHome} /><label className={`${visibleClass}`}>Inicio</label></Link>
          </li>
          <li title="Administración" className="sidebar-btnitem pb-2">
            <button className="submenu-btn" onClick={() => setOpen(!open)}>
              <FontAwesomeIcon className="pe-3" icon={faScrewdriverWrench} />
              <label className={`${visibleClass}`}>Administración</label>
              <FontAwesomeIcon className={`chevron ${visibleClass}`} icon={open ? faChevronCircleUp : faChevronCircleDown} />
            </button>
            {open && (
              <ul className="submenu">
                <li title="Grupos" className={`submenu-item ${location.pathname.includes("/groups") ? "active" : ""} ${!sidebarVisible ? "submenu-item--modify" : ""}`}>
                  <Link className={`${ sidebarVisible ? "" : "submenu-item--modify" }`} to="/groups"><FontAwesomeIcon className="pe-3" icon={faUserGroup} /><label className={`${visibleClass}`}>Grupos</label></Link>
                </li>
                <li title="Contenido de la página" className={`submenu-item ${location.pathname.includes("/services") ? "active" : ""} ${!sidebarVisible ? "submenu-item--modify" : ""}`}>
                  <Link className={`${ sidebarVisible ? "" : "submenu-item--modify" }`} to="/services"><FontAwesomeIcon className="pe-3" icon={faImages} /><label className={`${visibleClass}`}>Contenido</label></Link>
                </li>
                <li title="Servicios" className={`submenu-item ${location.pathname.includes("/services") ? "active" : ""} ${!sidebarVisible ? "submenu-item--modify" : ""}`}>
                  <Link className={`${ sidebarVisible ? "" : "submenu-item--modify" }`} to="/services"><FontAwesomeIcon className="pe-3" icon={faTruckField} /><label className={`${visibleClass}`}>Servicios</label></Link>
                </li>
                <li title="Prestamos" className={`submenu-item ${location.pathname.includes("/services") ? "active" : ""} ${!sidebarVisible ? "submenu-item--modify" : ""}`}>
                  <Link className={`${ sidebarVisible ? "" : "submenu-item--modify" }`} to="/services"><FontAwesomeIcon className="pe-3" icon={faClipboard} /><label className={`${visibleClass}`}>Prestamos</label></Link>
                </li>
                <li title="Productos" className={`submenu-item ${location.pathname.includes("/services") ? "active" : ""} ${!sidebarVisible ? "submenu-item--modify" : ""}`}>
                  <Link className={`${ sidebarVisible ? "" : "submenu-item--modify" }`} to="/services"><FontAwesomeIcon className="pe-3" icon={faCartShopping} /><label className={`${visibleClass}`}>Productos</label></Link>
                </li>
                <li title="Cargues masivos" className={`submenu-item ${location.pathname.includes("/services") ? "active" : ""} ${!sidebarVisible ? "submenu-item--modify" : ""}`}>
                  <Link className={`${ sidebarVisible ? "" : "submenu-item--modify" }`} to="/services"><FontAwesomeIcon className="pe-3" icon={faArrowUpFromBracket} /><label className={`${visibleClass}`}>Cargues masivos</label></Link>
                </li>
              </ul>
            )}
          </li>
          <hr className="m-2" style={{ color: "#7599ca" }} />
          <li><h6 className={`mt-2 ${visibleClass}`}  style={{ fontSize: "11px", fontWeight: "bold", color: "#babfc9", margin: "0px", paddingLeft: "11px" }}>EXTRA</h6></li>
          <li title="Cerrar sesión" className="mt-2 sidebar-item"><Link to="/"><FontAwesomeIcon className="pe-3" icon={faPowerOff} /><label className={`${visibleClass}`}>Cerrar sesión</label></Link></li>
        </ul>
      </aside>
    </>
  );
};

export default SidebarComponent;
