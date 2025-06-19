import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Chip,
  Stack,
  Grid,
} from "@mui/material";
import axios from "axios";
import { allItemsCenter } from "../../../custom-styles";

const AddProject = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    functional_title: "",
    devFunctionalities: [],
    skills: [],
    images: [],
  });

  const [tempInput, setTempInput] = useState({
    devFunctionalities: "",
    skills: "",
    images: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddTag = (key) => {
    const value = tempInput[key].trim();
    if (value && !formData[key].includes(value)) {
      setFormData((prev) => ({
        ...prev,
        [key]: [...prev[key], value],
      }));
    }
    setTempInput((prev) => ({ ...prev, [key]: "" }));
  };

  const handleRemoveTag = (key, itemToRemove) => {
    setFormData((prev) => ({
      ...prev,
      [key]: prev[key].filter((item) => item !== itemToRemove),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://your-backend-url/api/projects/add",
        formData,
        { withCredentials: true }
      );
      alert("Project added successfully!");
      console.log(res.data);
    } catch (err) {
      alert("Failed to add project");
      console.error(err);
    }
  };

  const projectInputs = [
    {
      id: "name",
      label: "Project Name",
      type: "text",
      required: true,
    },
    {
      id: "functional_title",
      label: "Functional Title",
      type: "text",
      required: true,
    },
    {
      id: "description",
      label: "Project Description",
      type: "textarea",
      required: true,
    },
  ];

  return (
    <Box sx={{ width: "100%", border: "2px solid red" }}>
      <Typography variant="h5" mb={3} textAlign="center" fontWeight="bold">
        Add New Project
      </Typography>

      <Grid container spacing={2} component="form" onSubmit={handleSubmit}>
        {projectInputs.map((input) => (
          <Grid
            size={{ xs: 12, md: input.type === "textarea" ? 12 : 6 }}
            key={input.id}
          >
            {input.type === "textarea" ? (
              null
            ) : (
              <TextField
                label={input.label}
                name={input.id}
                fullWidth
                size="small"
                required={input.required}
                value={formData[input.id]}
                onChange={handleChange}
              />
            )}
          </Grid>
        ))}

        {/* Dev Functionalities */}
        <Grid size={{ xs: 12, md:12}}>
          <Typography mb={1}>Development Functionalities</Typography>
          <Stack direction="row" spacing={1} mb={1} flexWrap="wrap">
            {formData.devFunctionalities.map((item, idx) => (
              <Chip
                key={idx}
                label={item}
                sx={{ backgroundColor: "#000" }}
                onDelete={() => handleRemoveTag("devFunctionalities", item)}
              />
            ))}
          </Stack>
          <TextField
            fullWidth
            value={tempInput.devFunctionalities}
            onChange={(e) =>
              setTempInput((prev) => ({
                ...prev,
                devFunctionalities: e.target.value,
              }))
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleAddTag("devFunctionalities");
              }
            }}
            placeholder="Press Enter to add functionality"
          />
        </Grid>

        {/* Skills */}
        <Grid size={{ xs: 12, md: 12 }}>
          <Typography mb={1}>Skills</Typography>
          <Stack direction="row" spacing={1} mb={1} flexWrap="wrap">
            {formData.skills.map((item, idx) => (
              <Chip
                key={idx}
                label={item}
                 sx={{ backgroundColor: "#000" }}
                onDelete={() => handleRemoveTag("skills", item)}
              />
            ))}
          </Stack>
          <TextField
            fullWidth
            value={tempInput.skills}
            onChange={(e) =>
              setTempInput((prev) => ({ ...prev, skills: e.target.value }))
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleAddTag("skills");
              }
            }}
            placeholder="Press Enter to add skill"
          />
        </Grid>

        {/* Images */}
        <Grid size={{ xs: 12, md: 12 }}>
          <Typography mb={1}>Image URLs</Typography>
          <Stack direction="row" spacing={1} mb={1} flexWrap="wrap">
            {formData.images.map((item, idx) => (
              <Chip
                key={idx}
                label={item}
                 sx={{ backgroundColor: "#000" }}
                onDelete={() => handleRemoveTag("images", item)}
              />
            ))}
          </Stack>
          <TextField
            fullWidth
            value={tempInput.images}
            onChange={(e) =>
              setTempInput((prev) => ({ ...prev, images: e.target.value }))
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleAddTag("images");
              }
            }}
            placeholder="Press Enter to add image URL"
          />
        </Grid>
        {projectInputs.map((input) => (
          <Grid
            size={{ xs: 12, md: input.type === "textarea" ? 12 : 6 }}
            key={input.id}
          >
            {input.type === "textarea" ? (
              <TextField
                label={input.label}
                name={input.id}
                fullWidth
                required={input.required}
                multiline
                rows={5}
                value={formData[input.id]}
                onChange={handleChange}
              />
            ) : (
              ""
            )}
          </Grid>
        ))}

        <Grid size={{ xs: 12, md: 12 }} sx={{...allItemsCenter,mt:4}}>
          <Button type="submit" variant="contained" color="primary">
            Submit Project
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddProject;
