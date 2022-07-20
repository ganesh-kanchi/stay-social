import React, {useState} from "react";
import { Modal, Button, Box, TextField, Typography, Stack, FormControl, InputLabel, Select, MenuItem, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useSelector, useDispatch } from "react-redux";
import { addHabit } from "../../features/habits/habitsSlice";

export const HabitModal = ({isOpen, setIsOpen}) => {
    const { user, token } = useSelector(state=> state.auth);
    const dispatch = useDispatch();
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        maxHeight: 'l',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 3,
      };
    const handleClose = () => setIsOpen(false);
    const [dateValue, setDateValue] = useState({startDate: new Date(),endDate: new Date()})
    const habitInitialState = {name: "",startDate: dateValue.startDate, endDate: dateValue.endDate ,goal: 1,repeat: "Daily", color: "Red"  };
    const [ habitInfo, setHabitInfo ] = useState(habitInitialState) 
    const dateChangeHandler = (newValue) => {
        setDateValue(newValue);
      };
    const HabitInfoChangeHandler = (e) => {
        const {name, value} = e.target;
        setHabitInfo((state)=> {
            return {...state, [name]:value }
        });
    }

    return (
        <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                New Habit
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={2}>
                    <TextField id="outlined-basic" value={habitInfo.name} onChange={HabitInfoChangeHandler} label="Name" name="name" variant="outlined" />
                    
                    <DesktopDatePicker
                        label="Start Date"
                        inputFormat="dd/MM/yyyy"
                        value={habitInfo.startDate}
                        onChange={dateChangeHandler}
                        renderInput={(params) => <TextField {...params} name="startDate" />}
                        />
                    <DesktopDatePicker
                        label="End Date"
                        inputFormat="dd/MM/yyyy"
                        value={habitInfo.endDate}
                        onChange={dateChangeHandler}
                        renderInput={(params) => <TextField {...params} name="endDate" />}
                        />
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Goal</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={habitInfo.goal}
                            name="goal"
                            label="Goal"
                            onChange={HabitInfoChangeHandler}
                        >
                            <MenuItem value={1}>1 Time</MenuItem>
                            <MenuItem value={2}>2 Times</MenuItem>
                            <MenuItem value={3}>3 Times</MenuItem>
                            <MenuItem value={5}>5 Times</MenuItem>
                            <MenuItem value={7}>7 Times</MenuItem>
                            <MenuItem value={10}>10 Times</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Repeat</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={habitInfo.repeat}
                            name="repeat"
                            label="Repeat"
                            onChange={HabitInfoChangeHandler}
                        >
                            <MenuItem value={"Daily"}>Daily </MenuItem>
                            <MenuItem value={"Weekly"}>Weekly </MenuItem>
                            <MenuItem value={"Monthly"}>Monthly </MenuItem>
                            <MenuItem value={"Yearly"}>Yearly </MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Color</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={habitInfo.color}
                            name="color"
                            label="Color"
                            onChange={HabitInfoChangeHandler}
                        >
                            <MenuItem value={"Red"}>Red </MenuItem>
                            <MenuItem value={"Green"}>Green </MenuItem>
                            <MenuItem value={"Blue"}>Blue </MenuItem>
                            <MenuItem value={"Yellow"}>Yellow </MenuItem>
                            <MenuItem value={"Purple"}>Purple </MenuItem>
                        </Select>
                    </FormControl>
                    {/* {user.labels.length>0 && (

                        <FormControl>
                        <Typography variant="h6" component="h4">Labels</Typography>
                            <FormGroup onChange={habit.}>
                                {user.labels.map((label)=> <FormControlLabel control={<Checkbox />} label={label} />)}
                            </FormGroup>
                        </FormControl>
                            )
                    } */}
                    <Button variant="contained" onClick={()=>{
                            dispatch(addHabit({token,habitInfo}))
                            setHabitInfo(habitInitialState)
                            handleClose()
                        }} className="mui-button">Done</Button>

                </Stack>
            </LocalizationProvider>
        </Box>
        </Modal>
    )
}