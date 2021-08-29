import { Fragment } from "react";
import styled from "styled-components";
import search from '../../public/assets/icons/Search.svg'
import plus from '../../public/assets/icons/plus.svg'

const SearchWrapper = styled.div`
display: flex;
justify-content: space-between;
`

const IMG = styled.img`
cursor: pointer;
`

const SearchField = styled.input`
    padding-left: 10px;
    border: none;
    color: grey;
    font-weight: bold;
    width: 232px;
    &:focus{
        border: none;
        outline: none;
    }
    &::placeholder{
        font-family: rubix-regular;
        font-size: 15px;
        font-weight: normal;
    }

    @media (min-width: 768px) {
  width: 172px;
}

@media (min-width: 992px) {
  width: 205px;
}
`

const SearchChat = (props) => {
    return (
        <Fragment>
            <SearchWrapper className={props.className}>
                <IMG src={search.src} alt="search-icon" />
                <SearchField placeholder='Type your message...' onChange={(e) => props.onChange(e)}/>
                <IMG src={plus.src} alt="plus-icon" className='ps-1' onClick={props.clickPlus}/>
            </SearchWrapper>
        </Fragment>
    );
}

export default SearchChat;