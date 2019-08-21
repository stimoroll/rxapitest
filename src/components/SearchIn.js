import React, { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, FormControl, InputBase }  from '@material-ui/core/';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';

//TODO: keyboard control: ESC cleare filter

const useStyles = makeStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: '100vw',
      background: 'white',
      flexDirection: 'row',
      alignItems: 'left',
      borderBottom: '1px solid #ccc',
      cursor: 'edit',
    },
    input: {
      alignSelf: 'left',
      marginLeft: 8,
      color: 'black',
      fontSize: '1.6em',
      // width: 'calc( 100% - 50px )',
    },
    iconButton: {
      // alignSelf: 'right',
      padding: 10,
      width: '45px',
    },
    divider: {
      width: 1,
      height: 40,
      margin: 4,
    },
});

const SearchBox = ({handleInputChange}) => {
    const searchRef = useRef()
    const classes = useStyles();
    const [showCross, setShowCross] = useState(false);
    const [query, setQuery] = useState('');

    const onChangHandler = (e) => {
        setQuery(searchRef.current.value);
        setShowCross(query.length > 0);
    }

    const onClikcCrossHandler = () => {
        searchRef.current.value = '';
        setShowCross(false);
        setQuery('');
    }

    const onClickFormHandler = () => {
      //TODO: set focus on click on whole top bar
    }

    useEffect(() => {
        handleInputChange(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    return (
        <FormControl  fullWidth
                      className={classes.root}
                      onClick={onClickFormHandler} >
          <IconButton className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
          <Divider className={classes.divider} />
          <InputBase
            className={classes.input}
            placeholder="Filter user posts"
            inputProps={{ 'aria-label': 'Filter user posts' }}
            onChange={onChangHandler}
            inputRef={searchRef}
            autoFocus
            />
            {showCross && <IconButton onClick={onClikcCrossHandler}>
              <ClearIcon />
            </IconButton>}
        </ FormControl>
    )
}

export default SearchBox;