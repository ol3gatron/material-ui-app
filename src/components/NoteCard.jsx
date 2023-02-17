import IconButton from '@mui/material/IconButton';
import { Card, CardHeader, CardContent, Typography, Avatar } from "@mui/material"
import { DeleteOutline } from '@mui/icons-material';

const NoteCard = ({ note, handleDelete }) => {
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={
            <Avatar
              alt={note.category}
              sx={{ backgroundColor: () => {
                if (note.category === "react") {
                  return "#087ea4"
                } else if (note.category === "js") {
                  return "#f7e018"
                } else if (note.category === "ts") {
                  return "#2d79c7"
                }
              } }}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutline/>
            </IconButton>
          }
          title={note.title}
          subheader={`${note.category[0].toUpperCase() + note.category.slice(1)}`}
        />
        <CardContent>
          <Typography variant="body" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}
export default NoteCard