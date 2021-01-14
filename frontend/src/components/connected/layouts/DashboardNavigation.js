import React from 'react';
import { Link } from "react-router-dom";

export default function DashboardNavigation() {
    return (
        <>
            <div className="col-12 text-center pt-3 pb-3 mb-2" style={{backgroundColor: "#95afc0"}}>
                <Link className="fas fa-search" style={{cursor: "pointer", color:"white", fontWeight: "800"}} to="/search"></Link>
            </div>

            <div className="col-12 text-center pt-3 pb-3 mb-2" style={{backgroundColor: "#95afc0"}}>
                <Link className="fas fa-cloud" style={{cursor: "pointer", color:"white", fontWeight: "800"}} to="/campagnes"></Link>
            </div>

            <div className="col-12 text-center pt-3 pb-3 mb-2" style={{backgroundColor: "#95afc0"}}>
                <Link className="fas fa-user-circle" style={{cursor: "pointer", color:"white", fontWeight: "800"}} to="/profil"></Link>
            </div>

            <div style={{height: "100%", minHeight: "100%", backgroundColor: "#95afc0"}}>
            </div>
        </>
    )
}
