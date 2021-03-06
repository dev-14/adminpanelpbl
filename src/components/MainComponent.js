import React, { Component } from "react";
import { PersonalDetailsTable } from "./personalDetails/displayPersonalDetailsTable";
import { AcademicsTable } from "./academics/displayAcademicsTable";
import { InternshipsTable } from "./internships/internshipsTable";
import { OnlineCertificationsTable } from "./onlineCertifications/onlineCertificationsTable";
import { ProjectDetailsTable } from "./projectDetails/projectDetailsTable";

//import { Sidebar } from './Sidebar/SidebarComponent'

export class Main extends Component {

    render() {

        return (
            <div>
                <ProjectDetailsTable />
                

            </div>

        );
    }
}