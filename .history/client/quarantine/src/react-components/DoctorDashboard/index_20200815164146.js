import React, { Component } from "react";
import Sidebar from "../SideNavBar/sidebar.js";
import PageTitle from "../theme/PageTitle";

export class DoctorDashboard extends Component {
    state = {
        tips:[],
        news:[]
    };
    render() {
        return (
            <div>
                <Sidebar title={"Dashboard"} />
                <div className=" main-content-container px-4 pb-4 container-fluid">
                    <div className="col-lg-10 offset-lg-2">
                        <div className="row no-gutters page-header py-4">
                            <PageTitle
                                sm="4"
                                title="Requests for my answer"
                                subtitle=""
                                className="text-sm-left"
                            />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default DoctorDashboard;