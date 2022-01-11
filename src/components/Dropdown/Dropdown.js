import * as React from 'react';
import Image from '../Image';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import flagEn from '../../image/flag/en.png'
import flagFr from '../../image/flag/fr.png'
import flagAz from '../../image/flag/az.png'
import { GrowStyled } from './Dropdown.styled';
import { useTranslation } from 'react-i18next';

const Dropdown = () => {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const { i18n } = useTranslation();


    let options = React.useMemo(() => [
        { flag: flagEn, lang: 'en' },
        { flag: flagFr, lang: 'fr' },
        { flag: flagAz, lang: 'az' }
    ],[])

    React.useEffect(() => {
        let lang = localStorage.getItem("lang") || "en"
        i18n.changeLanguage(lang)
        let pos = options?.map(e => e.lang ).indexOf(lang);
        setSelectedIndex(pos)
    },[options,i18n])

    const handleMenuItemClick = (lang, index) => {
        i18n.changeLanguage(lang)
        localStorage.setItem("lang", lang)
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    return (
        <React.Fragment>
            <ButtonGroup variant="text" ref={anchorRef} aria-label="split button">
                <Button onClick={handleToggle}>
                    <Image cover radius="100" width="40" height="40" src={options[selectedIndex]?.flag} />
                </Button>
            </ButtonGroup>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                style={{zIndex:100}}
            >
                {({ TransitionProps, placement }) => (
                    <GrowStyled
                        {...TransitionProps}
                        placement={placement}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id="split-button-menu">
                                    {options.map(({ flag, lang }, index) => (
                                        <MenuItem
                                            key={index}
                                            selected={index === selectedIndex}
                                            onClick={() => handleMenuItemClick(lang, index)}
                                        >
                                            <Image cover radius="100" width="40" height="40" src={flag} />
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </GrowStyled>
                )}
            </Popper>
        </React.Fragment>
    );
}

export default Dropdown