import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const AddTodoPrioritySelect = ({ priority, handlePrioritySelectChange }) => {
  const classes = useStyles();

  // Priority - possible values “Low”, “Medium”, “High”

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">Priority</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={priority}
        onChange={handlePrioritySelectChange}
        label="Priority"
      >
        <MenuItem value={"low"}>Low</MenuItem>
        <MenuItem value={"medium"}>Medium</MenuItem>
        <MenuItem value={"high"}>High</MenuItem>
      </Select>
    </FormControl>
  );
};

export default AddTodoPrioritySelect;
