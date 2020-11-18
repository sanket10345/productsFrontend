import react, { useState } from 'react'
import Button from "@material-ui/core/Button";
import Search from "@material-ui/icons/Search";
import { toolbarStyle } from './'

export default function ProductToolbar(props) {
    const classes = toolbarStyle();
    const [searchValue,setSearchValue] = useState('')

    const handleAdd = () => {
        props.handleOpenModel({"action":"Add Product","index":-1});
    };
    const handleSearchInputChange = (event) =>{
        setSearchValue(event.target.value)
    }
    const handleSearchButtonClick = () =>{
        console.log("Button CLicked")
    }
    return (

        <div className={classes.row}>
            <div className={classes.searchWrapper}>
                <input className={classes.margin + " " + classes.search}
                    type="text"
                    onChange={handleSearchInputChange}
                    value={searchValue || ''}
                    placeholder="Search By Brand" aria-label="Search" />
                <Button color="white" aria-label="edit" justIcon round>
                    <Search 
                    onClick={handleSearchButtonClick}
                    />
                </Button>
            </div>
            <span className={classes.spacer} />
            <div className={classes.editOrAddWrapper}>
                <Button className={classes.editOrAddButton}
                    color="primary"
                    variant="contained"
                    onClick={() => handleAdd()}
                >
                    Add Product
          </Button>
            </div>
        </div>
    );
}