import React from "react";  
import { Avatar, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
function ListComment(props  ) {
  const { movieId } = props;

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const apiUrl = `http://localhost:4000/comment/${movieId}`;

    axios.get(apiUrl)
      .then(response => {
        console.log(response);
        setComments(response.data.data.allCommentsOnPost)
       
      })
      .catch(error => {
        console.error('Error fetching comments:', error);
      });
  }, [movieId]);


    
  function renderList() {
    if (!comments || comments.length === 0) {
      return <li>Chưa có bình luận nào.</li>;
    }
  
    return comments.map((comment, index) => (
      <Grid item key={index} xs={6} sm={6} md={4}>
      <div className="media" style={{ width: "50%", marginTop: "-2%", overflow: "hidden" }}>
        <a className="pull-left" href="#">
          <Avatar alt={comment.User.fullName || null} src={comment.User.avatar} />
        </a>
        <div className="media-body">
          <ul className="sinlge-post-meta">
            <li>
              <i className="fa fa-user" /> {comment.User.fullName || null}
            </li>
            <li>
              <i className="fa fa-clock-o" /> {new Date(comment.createdAt).toLocaleString()}
            </li>
            <li>
              <i className="fa fa-calendar" /> {new Date(comment.updatedAt).toLocaleString()}
            </li>
          </ul>
          <Typography paragraph={true} style={{ overflow: "hidden" ,fontSize:"18px" }}>
            {comment.content}
          </Typography>
        </div>
      </div>
    </Grid>
    ));
  }
  


  return (
   
    <div className="response-area">
    <Typography variant="h2">RESPONSES</Typography>
    <Grid container p={5} spacing={2} direction="column">
      {renderList()}
    </Grid>
  
  </div>
  );
}
export default ListComment;