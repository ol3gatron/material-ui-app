import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Typography, Button, Container, TextField, RadioGroup, Radio, FormControlLabel, FormControl, FormLabel } from "@mui/material"
import SendIcon from "@mui/icons-material/Send"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import axios from "axios"

export default function Create() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    title: "",
    details: "",
    category: "react",
  })

  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }))
  }

  const sendData = async (title, details, category) => {
    await axios.post("http://localhost:5000/notes", {
      title,
      details,
      category
    })
    navigate("/")
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setTitleError(false)
    setDetailsError(false)

    const {title, details, category} = formData
    if (title && details) {
      sendData(title, details, category)
    } else if (!title && !details) {
      setTitleError(true)
      setDetailsError(true)
    } else if (!title) {
      setTitleError(true)
    } else {
      setDetailsError(true)
    }
  }

  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          label="Note Title"
          name="title"
          variant="outlined"
          color="secondary"
          required
          fullWidth
          error={titleError}
          onChange={handleChange}
          value={formData.title}
          helperText={titleError && "Create a title for the note."}
          sx={{ marginTop: "20px", marginBottom: "20px", display: "block"}}
        />

        <TextField
          label="Details"
          name="details"
          variant="outlined"
          color="secondary"
          required
          fullWidth
          multiline
          rows={4}
          error={detailsError}
          onChange={handleChange}
          value={formData.details}
          helperText={detailsError && "Add some details for the note."}

        />

        <FormControl
          sx={{ marginTop: "20px", marginBottom: "20px", display: "block"}}
        >
          <FormLabel>Category</FormLabel>
          <RadioGroup
            name="category"
            onChange={handleChange}
            value={formData.category}
          >
          <FormControlLabel value="react" control={<Radio />} label="React" />
          <FormControlLabel value="js" control={<Radio />} label="JavaScript" />
          <FormControlLabel value="ts" control={<Radio />} label="TypeScript" />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  )
}
