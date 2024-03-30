import React, { useEffect, useState } from "react";
import { useHistory, useNavigate } from "react-router-dom";
import {
  Box,
  CircularProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStylesCountDown = makeStyles((theme) => ({
  container: {
    position: "relative",
    width: "200px",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  root: {
    position: "relative",
  },
  bottom: {
    color: "#b2b2b2",
  },
  top: {
    animationDuration: "100ms",
    position: "absolute",
    left: 0,
  },
  circle: {
    strokeLinecap: "round",
  },
  text: {
    fontWeight: "bold",
    fontSize: "1.35em",
    marginTop: "1em",
  },
}));

const useCountDownTimer = (
  duration,
  colors = [],
  colorValues = [],
  onComplete
) => {
  const classes = useStylesCountDown();
  const [timeDuration, setTimeDuration] = useState(() => {
    const savedTime = localStorage.getItem("countdownTime");
    return savedTime !== null ? parseInt(savedTime) : duration;
  });

  const [countdownText, setCountdownText] = useState();
  const [countdownPercentage, setCountdownPercentage] = useState(100);
  const [countdownColor, setCountdownColor] = useState("#004082");
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeDuration((prev) => {
        if (prev > 0) {
          // Kiểm tra trước khi giảm giá trị thời gian
          const newTime = prev - 1;
          localStorage.setItem("countdownTime", newTime);
          return newTime;
        } else {
          clearInterval(interval);
          localStorage.removeItem("countdownTime"); // Xoá giá trị khi thời gian hết
          onComplete();
          navigate("/chontime");
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const minutes = Math.floor(timeDuration / 60);
    const seconds = timeDuration % 60;
    setCountdownText(`${minutes}:${seconds < 10 ? "0" + seconds : seconds}`);
  }, [timeDuration]);

  useEffect(() => {
    for (let i = 0; i < colorValues.length; i++) {
      const item = colorValues[i];
      if (timeDuration === item) {
        setCountdownColor(colors[i]);
        break;
      }
    }
  }, [timeDuration]);

  return {
    classes,
    countdownText,
    countdownPercentage,
    countdownColor,
  };
};

const CountDownTimer = (props) => {
  const { classes, countdownText, countdownPercentage, countdownColor } =
    useCountDownTimer(
      props.duration,
      props.colors,
      props.colorValues,
      props.onComplete
    );

  return (
    <Box className={classes.container}>
      <Box className={classes.root}>
        <CircularProgress
          className={classes.top}
          classes={{
            circle: classes.circle,
          }}
          variant="determinate"
          size={30} // Điều chỉnh kích thước ở đây
          thickness={4}
          value={countdownPercentage}
          style={{
            transform: "scaleX(-1) rotate(-90deg)",
            color: countdownColor,
            marginTop: "8px",
            marginLeft: "40px", // Điều chỉnh chiều cao lên trên ở đây
          }}
        />
      </Box>
      <Typography className={classes.text}>{countdownText}</Typography>
    </Box>
  );
};

export default CountDownTimer;
