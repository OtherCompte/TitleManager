import React from 'react'

import ProfilInformation from "./Profil/ProfilInformation"


export default function Profil() {

    

    return (


        <div className="container-fluid">
            <div className="row">
                <h1 className="mx-auto pt-4">Profil Information</h1>
            </div>
            <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                    <ProfilInformation />
                </div>
                <div className="col-sm-1"></div>
            </div>
        </div>


    )
}
