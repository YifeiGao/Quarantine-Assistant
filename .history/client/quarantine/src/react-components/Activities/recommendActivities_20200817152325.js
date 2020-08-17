import React from "react";
import {addToMyList} from "./activitiesActions.js";
import "./myActivities.js";


class RecommendActivities extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		const {recAct, queueComponent}=this.props;
		return(
			<div class="card mb-3">
			  <div class="row no-gutters">
			    <div class="col-md-4">
			   {{
			     	"Sport":<img src={queueComponent.state.sport} class="card-img"/>,
			     	"Yoga": <img src={queueComponent.state.yoga} class="card-img"/>,
					"Read": <img src={queueComponent.state.book} class="card-img"/>,
					"Cook": <img src={queueComponent.state.cook} class="card-img"/>,
					"Movie":<img src={queueComponent.state.movie} class="card-img"/>,
					"Study":<img src={queueComponent.state.study} class="card-img"/>
			    }[recAct.activityType]}
			    {console.log(recAct.activityType)}
			    </div>
			    <div class="col-md-8">
			    
			     <div class="card-body">
			        <h5 class="card-title">{recAct.activityTitle}</h5>
			        <p>{recAct.activityType}</p>
			        <p class="card-text">{recAct.activityDescription}</p>
			        <p class="card-text">
						<small class="text-muted">Added time: {recAct.addTime}</small>
			        	<button 
							type="button"
							id="addActToMyList"
							class="ActivityBtn"
							onClick={
								addToMyList.bind(this,recAct,queueComponent)
							}
						>
							Add
						</button>
			        </p>
			      </div>
			
			      
			    </div>
			  </div>
			</div>
			);

	}
}

export default RecommendActivities;