
import React from 'react';
import './qa.css';
import Media from './media';
import { uid } from "react-uid";
import DropDown from './dropdown';


class QA extends React.Component {
    state = {
        /*user = this.props.user*/
        postsList: [{ names: ["Qixin", "Yifei"], contents: ["Aba aba aba? #aba", "Aba aba aba aba aba. #aba"], times: [new Date(), new Date()], likes: [100, 2], tags: ["#aba", "#aba"] },
        { names: ["Qixin", "Yifei"], contents: ["Aba aba aba? #aba", "Aba aba aba aba aba. #aba"], times: [new Date(), new Date()], likes: [1, 659], tags: ["#aba", "#aba"] }]

    }

    render() {
        return (
            <div>
                <div className="jumbotron jumbotronQa jumbotron-fluid">
                    <div className="container">
                        <h1 className="title titleQa">Quanrantine Assistant Communities</h1>
                        <p>Find answers, ask questions, and connect with our community of the most authoritative doctors from around the world.</p>
                        <form className="searchGroup searchGroupQa">
                            <div className="form-group form-groupQa">
                                <input type="text" id="searchedTag" className="form-control" placeholder="Search by tags..." />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={this.search}>Search !</button>
                        </form>
                    </div>
                </div>

                <div>
                    <form action="#" className="postForm">
                        <img src={require("../lib/profilephotos/Qixin.png")} className="profilephotoPost" />

                        <div className="form-group form-groupQa">
                            <input className="form-control" id="post" placeholder="Make a new post here..." name="email" />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.post}>Post ! !  </button><br />
                        <div className="form-group form-groupQa tagDiv">
                            <input className="form-control" id="tags" placeholder="#Tags" name="pswd" />
                        </div>
                        <div className="anonnCheck">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" /> Anonnymous to others
                            </label>
                        </div>
                    </form>
                </div>
                <br /><hr /><br /><br /><br />
                <div>
                    <span id="dropDown"><DropDown/></span>
                    {this.state.postsList.map((post, mediaNum) => (
                    <Media key={uid(post)} postsList={post} handleLike={(i, amt) => this.like(i, mediaNum, amt)} handleReply={(name, content) => this.handleReply(mediaNum, name, content)} mediaId={mediaNum} />
                     ))}
                </div>
                
                <button type="button" onClick={this.backTop} className="btn btn-primary btn-block">Back to top</button>
            </div>
        );
    }

    search = (e) => {
        const t = document.getElementById("searchedTag").value;
        e.preventDefault();
        const posts = document.getElementsByClassName("mt-3");
        const regExp = / +/;
        if (t === "" || regExp.test(t)) {
            for (let i = 0; i < posts.length; i++) {
                posts[i].style.visibility = "visible";
            }
            return;
        }
        for (let i = 0; i < posts.length; i++) {
            posts[i].style.visibility = "collapse";
        }
        for (let i = 0; i < this.state.postsList.length; i++) {
            for (let j = 0; j < this.state.postsList[i].tags.length; j++){
                if (this.state.postsList[i].tags[j].includes(t)) {
                    posts[i].style.visibility = "visible";
                }
            }
        }
    }

    post = (e) => {
        e.preventDefault();
        const post = document.querySelector("#post");
        const regExp = / +/;
        if (post.value === "" || regExp.test(post.value)) {
            alert("Can't send empty post");
            return;
        }
        const tags = document.querySelector("#tags");
        console.log(post.value);
        this.state.postsList.splice(0, 0, { names: ["Qixin"], contents: [post.value + " " + tags.value], times: [new Date()], likes: [0], tags: [tags.value] });
        const newList = this.state.postsList;
        this.setState({ postsList: newList })
        // todo: a server call that sends data
    }

    backTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    like = (i, j, amt) => {
        const postsListB = this.state.postsList;
        postsListB[j].likes[i] += amt;
        this.setState({ postsList: postsListB });
    }

    handleReply = (mediaId, name, content) => {
        const newList = this.state.postsList;
        newList[mediaId].names.push(name);
        newList[mediaId].contents.push(content);
        newList[mediaId].times.push(new Date());
        newList[mediaId].likes.push(0);
        newList[mediaId].tags.push("");
        this.setState({postsList: newList});
    }
}

export default QA;