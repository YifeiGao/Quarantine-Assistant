import React from "react";
import { Alert } from "shards-react";
import ProgressCheck from "./ProgressCheck";
import ContentCard from "./ContentCard";
import ContentCardNews from "./ContentCardNews"
import Sidebar from "../SideNavBar/sidebar.js";
import PageTitle from "../theme/PageTitle";
import { getTips, getNews } from "../../actions/user";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        // getNews();
        // this.props.history.push("/dashboard")

    }
    componentDidMount() {
        getTips(this);
        getNews(this);
        
      }
    
    //   componentWillReceiveProps({ location = {} }) {
    //       console.log("componentWillReceiveProps");
    //     if (location.pathname === '/dashboard' && location.pathname !== this.props.location.pathname) {
    //       getTips(this);
    //     }
    //   }
    state={
        tips:{
            title:"",
            content:""
        },
        news:{
            title:"",
            content:""
        }

    }
    render() {
        const {app}=this.props;
        return (
            <div>
                <Sidebar title={"Dashboard"} history={this.props.history} app={app} />

                <div className="main-content-container px-4 pb-4 container-fluid">
                    <div className="col-lg-10 offset-lg-2">
                        <div className="row no-gutters page-header py-4 ">
                            <PageTitle
                                sm="4"
                                title="Quarantine Progress"
                                subtitle=""
                                className="text-sm-left"
                            />
                        </div>
                        <div class="alert alert-dark" role="alert">
                            {/* TODO: Add servel call */}
                            Your self-isolation started at {app.state.quarantineStartDate}
                        </div>
                        
                        <div>
                            <div className="col col-lg-8">
                                <ProgressCheck />
                            </div>
                            {/* <div className="col col-lg-4 mb-4">
                                <div className="card small mb-4">
                                    <div className="card-header border-bottom">
                                        <h6 className="m-0">Check-in Today!</h6>
                                    </div>
                                    <div className="list-group-flush">
                                        <div className="px-1 list-group-item">
                                            <div className="form-group">
                                                <div className="mb-3 input-group">
                                                    <input
                                                        placeholder="Today's  temprature"
                                                        id="temp"
                                                    />
                                                    <input
                                                        placeholder="Today's weight"
                                                        id="weight"
                                                    />
                                                    <div class="input-group-prepend">
                                                        <button
                                                            type="button"
                                                            className="btn btn-info"
                                                            id="checkin"
                                                            onClick={
                                                                this.updateCal
                                                            }
                                                        >
                                                            Checkin
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Alert
                                    theme="success"
                                    open={this.state.visible}
                                >
                                    
                                    You've successfully checked in today!
                                </Alert> 
                            </div> */}
                        </div>
                        <hr></hr>
                        <div className="row">
                            <PageTitle
                                sm="4"
                                title="COVID-19 related:"
                                subtitle=""
                                className="text-sm-left"
                            />
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <ContentCard category="Tips" component={this} />
                            </div>
                            <div className="col-lg-6">
                                <ContentCardNews category="News" component={this}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    updateCal = (e) => {
        e.preventDefault();
        /* TODO: Add servel call */
        this.setState({
            visible: true,
        });
    };
}

export default Dashboard;