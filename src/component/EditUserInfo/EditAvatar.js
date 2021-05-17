import React, { useState } from "react";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    margin: "35px auto 15px auto",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  image: { width: 140, height: 140 },
  addPhoto: {
    color: "#235274",
    width: 22,
    height: 22,
    borderRadius: "50%",
  },
  addPhotoBtn: {
    backgroundColor: "#dddddd",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
    borderRadius: "50%",
    border: "none",
    outline: "none",
    cursor: "pointer",
  },
}));

export default function EditAvatar() {
  const classes = useStyles();
  const [photo, setPhoto] = useState({
    profileImg:
      "https://lifelinemedicalservices.co.uk/wp-content/uploads/2020/06/blank-profile-picture-973460_1280.jpg",
  });

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPhoto({ profileImg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    console.log(photo.profileImg);
  };

  return (
    <div className={classes.root}>
      <Badge
        overlap="circle"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        badgeContent={
          <div className={classes.addPhotoBtn}>
            <input
              type="file"
              id="input"
              accept="image/*"
              hidden
              onChange={imageHandler}
            />
            <label htmlFor="input">
              <AddAPhotoIcon className={classes.addPhoto} />
            </label>
          </div>
        }
      >
        <Avatar
          className={classes.image}
          alt="Travis Howard"
          src={photo.profileImg}
        />
      </Badge>
    </div>
  );
}
