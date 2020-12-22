import React, { useState, useEffect } from "react";
import { Box, IconButton, TextField, MenuItem } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";

const genders = ["Male", "Female", "Another"];

export const ProfileHeaderDetailsEdit = ({
  setEditMode,
  details,
  onSaveDetails,
}) => {
  const [formDetails, setFormDetails] = useState({
    name: "",
    bio: "",
    gender: "",
  });
  const handleChange = (e) => {
    setFormDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    setFormDetails(details);
  }, [details]);

  return (
    <Box width="400px" className="profile-header__details-edit">
      <Box display="flex" alignItems="center" mb={2}>
        <TextField
          label="Name"
          name="name"
          required
          value={formDetails.name}
          onChange={handleChange}
          size="small"
        />
        <IconButton
          aria-label="bookmark"
          onClick={() => onSaveDetails(formDetails)}
        >
          <SaveIcon />
        </IconButton>
        <IconButton aria-label="bookmark" onClick={setEditMode}>
          <EditIcon />
        </IconButton>
      </Box>
      <Box mb={2}>
        <TextField
          name="bio"
          required
          label="Bio"
          rows={4}
          multiline
          fullWidth
          variant="outlined"
          value={formDetails.bio}
          onChange={handleChange}
        />
      </Box>
      <TextField
        name="gender"
        required
        select
        label="Gender"
        variant="outlined"
        value={formDetails.gender}
        onChange={handleChange}
      >
        {genders.map((gender) => (
          <MenuItem key={gender} value={gender}>
            {gender}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};
