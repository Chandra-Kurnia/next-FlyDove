import { Fragment } from "react";
import MenuItem from "../molecules/MenuItem";
import styled from "styled-components";
import settings from '../../public/assets/icons/menus/settings.svg'
import contact from '../../public/assets/icons/menus/contact.svg'
import call from '../../public/assets/icons/menus/call.svg'
import mark from '../../public/assets/icons/menus/mark.svg'
import invite from '../../public/assets/icons/menus/invite.svg'
import faq from '../../public/assets/icons/menus/faq.svg'

const Wrapper = styled.div`
    width: 70%;
    background-color: var(--primary);
    padding: 15px 25px;
    position: absolute;
    right: 40px;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    border-top-right-radius: 20px;
    z-index: 99;
`

const Menu = (props) => {
    return (
        <Fragment>
            <Wrapper>
            <MenuItem src={settings} text='Setings' onClick={props.settingsEvt}/>
            <MenuItem src={contact} text='Contact' onClick={props.contactEvt}/>
            <MenuItem src={call} text='Calls' onClick={props.callsEvt}/>
            <MenuItem src={mark} text='Save message' onClick={props.savemessageEvt}/>
            <MenuItem src={invite} text='Invite Friends' onClick={props.inviterEvt}/>
            <MenuItem src={faq} text='Telegram FAQ' onClick={props.faqEvt}/>
            </Wrapper>
        </Fragment>
    );
}

export default Menu;