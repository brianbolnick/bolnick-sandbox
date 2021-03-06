import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components'
import Button from '../Button/Button'
import { show, fadeIn, fadeOut, scaleBack, scaleDown, scaleForward, quickScaleDown, scaleUp } from '../Keyframes/Keyframes'

const Overlay = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 9999;
    opacity: 1;
    /* animation: ${show} .5s ease; */
    animation: ${fadeIn} .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
    /* overflow-x: hidden;
    overflow-y: auto; */
    /* & ${ModalContent} {
        opacity: 0;
        animation: ${scaleUp} .8s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;    
    } */

`

const StyledModal = styled.div`
    /* background: white; */
    /* padding: 50px; */
    display: inline-block;
    /* border-radius: 3px; */
    /* font-weight: 300; */
    position: relative;
    width: 50%;
    /* opacity: 0; */
    animation: ${scaleUp} .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;  
    @media (max-width: 1320px) {
        width: 90%;
    }
`

const ModalContent = styled.div`
 
`

const CloseButton = styled.button`
    position: fixed;
    top: 0;
    right: 0;
    background: #fff;
    width: 2.5rem;
    height: 2.5rem;
    padding: 0;
    border: 0;
    cursor: pointer;
    outline: 0;
    box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.2);


    &:before, &:after {
        content: '';
        position: absolute;
        top: 1.2rem;
        left: 0.25rem;
        width: 2rem;
        height: 0.1rem;
        background-color: #888;
      }

      &:before {
        transform: rotate(45deg);
      }

      &:after {
        transform: rotate(-45deg);
      }
      
      &:hover:before, &:hover:after {
        background-color: #444;
      }
`

const TargetContainer = styled.div`
`



class Target extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        };
    }

    handleToggleModal() {
        this.setState({ showModal: !this.state.showModal });
    }
    render() {
        const { children, target } = this.props;
        const { showModal } = this.state;

        return (
            <div>
                <TargetContainer onClick={() => this.handleToggleModal()}>
                    {target}
                </TargetContainer>


                {showModal &&
                    <Modal onCloseRequest={() => this.handleToggleModal()}>
                        {/* <ModalContent> */}
                            {children}
                        {/* </ModalContent> */}
                    </Modal>}
            </div>
        );
    }
}

class Modal extends Component {
    constructor(props) {
        super(props);

        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
    }

    componentDidMount() {
        window.addEventListener('keyup', this.handleKeyUp, false);
        document.addEventListener('click', this.handleOutsideClick, false);
    }

    componentWillUnmount() {
        window.removeEventListener('keyup', this.handleKeyUp, false);
        document.removeEventListener('click', this.handleOutsideClick, false);
    }

    handleKeyUp(e) {
        const { onCloseRequest } = this.props;
        const keys = {
            27: () => {
                e.preventDefault();
                onCloseRequest();
                window.removeEventListener('keyup', this.handleKeyUp, false);
            },
        };

        if (keys[e.keyCode]) { keys[e.keyCode](); }
    }

    handleOutsideClick(e) {
        const { onCloseRequest } = this.props;
        if (this.wrapperRef && !this.wrapperRef.contains(e.target))  {            
            onCloseRequest();
            document.removeEventListener('click', this.handleOutsideClick, false);
        }
    }


    setWrapperRef = node => {
        this.wrapperRef = node;
    };

    render() {
        const {
            onCloseRequest,
            children
        } = this.props;

        return (
            <Overlay>
                <StyledModal>
                    <ModalContent innerRef={this.setWrapperRef}>
                        {children}
                    </ModalContent>
                </StyledModal>

                <CloseButton
                    type="button"
                    onClick={onCloseRequest}
                />
            </Overlay>
        );
    }
}

Modal.propTypes = {
    onCloseRequest: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ])
};

export default Target;