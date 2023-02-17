import axios from "axios"
import { useState, useEffect } from "react"
import { Grid, Paper } from "@mui/material"
import { Container } from "@mui/system"
import NoteCard from "../components/NoteCard"
import Masonry from "@mui/lab/Masonry"

export default function Notes() {
  const [notesData, setNotesData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:5000/notes")
      setNotesData(res.data)
    }

    getData()
  }, [])

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/notes/${id}`)

    const newNotes = notesData.filter((note) => note.id != id)
    setNotesData(newNotes)
  }

  return (
    <Container maxWidth="lg">
      <Masonry
        columns={{ xs: 1, sm: 1, md: 3, lg: 4 }}
        spacing={{ xs: 1, sm: 2 }}
      >
        {notesData.map((note) => (
          <div xs={12} sm={6} md={4} lg={3} key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  )
}
