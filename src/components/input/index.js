import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const film = [{ label: 'The Shawshank Redemption', year: 1994 }];

export default function Input(value) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={film}
      sx={{ width: 300 }}
      renderInput={params => <TextField {...params} label="Movie" />}
    />
  );
}
