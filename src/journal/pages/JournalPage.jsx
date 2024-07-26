import { IconButton, Typography } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NotSelectedView } from '../views/';
import { AddOutlined } from '@mui/icons-material';


const JournalPage = () => {
  return (
    <JournalLayout>
      <NotSelectedView />
      {/* <NoteView /> */}

      <IconButton
        size='large'
        sx={{
          color:'white',
          backgroundColor:'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{fontSize: 30}}/>
      </IconButton>
    </JournalLayout>
  );
};

export default JournalPage;