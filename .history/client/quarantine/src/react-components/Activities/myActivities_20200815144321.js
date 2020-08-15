import React from "react";
import {removeFromMyList} from "./activitiesActions.js";
import "./myActivities.css";

class MyActivites extends React.Component{

	constructor(props){
		super(props);
	}
		render(){
		const {myAct, queueComponent}=this.props;
		return(
			<div class="card mb-3">
			  <div class="row no-gutters">
			    <div class="col-md-4">
			      <img src={myAct.image} class="card-img"/>
			    </div>
			    <div class="col-md-8">
			      <div class="card-body">
			        <h5 class="card-title">{myAct.activityTile}</h5><p>{myAct.activityType}</p>
			        <p class="card-text">{myAct.activityDescription}</p>
			        <p class="card-text">
			        	
			        	<button 
							type="button"
							id="removeFromMyList"
							class="ActivityBtn"
							onClick={
								removeFromMyList.bind(this,queueComponent, myAct)
							}
						>
						Remove
						</button>
			        </p>
			      </div>
			    </div>
			  </div>
			</div>
			
			);

	}

}
export default MyActivites;