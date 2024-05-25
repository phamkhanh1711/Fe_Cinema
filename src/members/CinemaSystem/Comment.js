import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Textarea from "@mui/joy/Textarea";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Check from "@mui/icons-material/Check";
import FormatBold from "@mui/icons-material/FormatBold";
import FormatItalic from "@mui/icons-material/FormatItalic";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";  
import Cookies from "js-cookie";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { set } from "lodash";
function Comment(props) {
  

  const [loading, setLoading] = useState(false);
  const [italic, setItalic] = React.useState(false);
  const [fontWeight, setFontWeight] = React.useState("normal");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [errors, setErrors] = useState([]);
  const [comments, setComments] = useState([{}]);
  const [textarea, setTextarea] = useState({
    message: "",
  });

  useEffect(() => {
    // Set a timeout to change the loading state after 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 2 seconds delay

    // Clear the timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, []);
  function handleInput(e) {
    const nameInput = e.target.name;
    const value = e.target.value;
    setTextarea((state) => ({ ...state, [nameInput]: value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    let errorsSubmit = {};
    let flag = true;
    
    if (textarea.message == "") {
      errorsSubmit.message = "Vui lap nhap binh luan";
      flag = false;
    }
    if (!flag) {
      setErrors(errorsSubmit);
    } else {
      setErrors({});
      const { movieId } = props;
      setLoading(true);
      
      console.log(movieId);
      const Token = Cookies.get("Token");
      console.log(Cookies.get("Token"));

      const Auth = JSON.parse(Cookies.get("Auth"));
      console.log("Auth:", Auth);

      console.log("account_id:", Auth.userId);
      console.log("username:", Auth.fullName);

      let url = `http://localhost:4000/comment/comment/${movieId}`;
      console.log(url);

      let config = {
        headers: {
          Authorization: `Bearer ${Token}`,
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
      };

      if (textarea.message) {
        const commentData = {
          movieId:props.movieId,
          content: textarea.message,
        };

        console.log("commentData:", commentData);

        axios
          .post(url, commentData, config)
          .then((response) => {
            console.log(response);
          setLoading(false);
          window.location.reload();
              
            

          })
          .catch((error) => {
            console.log(error);
          setLoading(false);
          });
      }
    }
  }

 
  return (
    <>
       
        <Grid container p={20} spacing={7} mt={-20}>
          <Typography sx={{ fontSize: "20px", color: "white" }}>
          
        </Typography>
      <FormControl sx={{ width: "100%" }}>
      
        <Textarea
         name="message"
          placeholder="Type something here…"
          minRows={7}
          defaultValue={""}
          onChange={handleInput}
          endDecorator={
            <Box
              sx={{
                display: "flex",
                gap: "var(--Textarea-paddingBlock)",
                pt: "var(--Textarea-paddingBlock)",
                borderTop: "1px solid",
                borderColor: "divider",
                flex: "auto",
             
              }}>
              <IconButton
               
                variant="plain"
                color="neutral"
                onClick={(event) => setAnchorEl(event.currentTarget)}>
                <FormatBold />
                <KeyboardArrowDown fontSize="md" />
              </IconButton>
              <Menu
                backgroundColor="primary"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
                size="sm"
                placement="bottom-start"
                sx={{ "--ListItemDecorator-size": "24px" }}>
                {["200", "normal", "bold"].map((weight) => (
                  <MenuItem
                    key={weight}
                    selected={fontWeight === weight}
                    onClick={() => {
                      setFontWeight(weight);
                      setAnchorEl(null);
                    }}
                    sx={{ fontWeight: weight }}>
                    <ListItemDecorator>
                      {fontWeight === weight && <Check fontSize="sm" />}
                    </ListItemDecorator>
                    {weight === "200" ? "lighter" : weight}
                  </MenuItem>
                ))}
              </Menu>
              <IconButton
                variant={italic ? "soft" : "plain"}
                color={italic ? "primary" : "neutral"}
                aria-pressed={italic}
                onClick={() => setItalic((bool) => !bool)}>
                <FormatItalic />
              </IconButton>

            </Box>
          }
          sx={{
            fontSize: "16px",
            fontWeight,
            fontStyle: italic ? "italic" : "initial",
            width: "100%", // Làm cho chiều rộng bằng 100% của container
          }}
        />
      </FormControl>
      
      <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ marginTop: "20px" }}
          disabled={loading} // Disable the button when loading
        >
          {loading ? (
            <CircularProgress size={24} /> // Display a loading spinner when loading
          ) : (
            "Gửi Bình Luận" // Display the button text when not loading
          )}
        </Button>
       </Grid>
     
    </>
    
  );
}
export default Comment;
