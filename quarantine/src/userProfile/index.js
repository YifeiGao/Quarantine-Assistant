import React from "react";
import { Container, Row, Col } from "shards-react";
import UserBrief from "./userBrief";
import UserDetails from "./userDetails";
import PageTitle from "./../theme/PageTitle";
import Sidebar from "./../SideNavBar/sidebar";
class UserProfile extends React.Component {
  render() {
    return (
      <div>
        <Sidebar title={"Profile"} />
        <Container fluid className="main-content-container px-4">
          <Col lg={{ size: 10, offset: 2 }} md={{ size: 9, offset: 3 }}>
            <Row noGutters className="page-header py-4 ">
              <PageTitle
                sm="4"
                title="User Profile"
                subtitle=""
                className="text-sm-left"
              />
            </Row>
            <Row>
              <Col lg="4">
                <UserBrief />
              </Col>
              <Col lg="8">
                <UserDetails />
              </Col>
            </Row>
          </Col>
        </Container>
      </div>
    );
  }
}

export default UserProfile;