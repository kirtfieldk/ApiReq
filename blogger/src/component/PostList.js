import React from 'react';
import { connect } from 'react-redux';
import { fetchPost, fetchPostAndUsers } from '../actions';

import UserHeader from './UserHeader';

class PostList extends React.Component{
    //When component render out props get the fetchpost property
    componentDidMount(){
        this.props.fetchPostAndUsers();
    }
    renderList(){
        
        return this.props.posts.map(post =>{
            return (
                <div className = 'item' key ={post.id}>
                    <i className = 'large middle align user' />
                    <div className = 'content'>
                        <div className = 'description'>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        </div>
                        
                    <UserHeader userId = {post.userId}/>    
                    </div>
                </div>
            )
        })
    }
    render(){
        console.log(this.props.posts);
        return(
            <div className = 'ui relaxed divided list'>
               {this.renderList()}
            </div>
        );
    }
}
//State will have property of post//
//This with the connect function allows the above component to have access 
//To state
const mapStateToProps = (state) =>{
    return {posts: state.posts}
}
//fetchPost : fetchPosts
export default connect(mapStateToProps, { fetchPostAndUsers })(PostList);