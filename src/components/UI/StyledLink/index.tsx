import React, { Fragment } from 'react';
import { BoldLink, ArrowIcon }from './styles';
import rightArrowGreen from '../../../assets/right-arrow-green.png';
import rightArrowBlack from '../../../assets/right-arrow-black.png';
import leftArrowBlack from '../../../assets/left-arrow-black.png';

interface IProps {
    hasColor?: boolean,
    inverted?: boolean,
    noArrow?: boolean,
    to: string,
    exact?: boolean,
    fontSize?: string,
    arrowSize?: string,
}

const StyledLink: React.FC<IProps> = (props) => {
    let icon = <ArrowIcon src={rightArrowBlack} arrowSize={props.arrowSize} />;
    if (props.hasColor) icon = <ArrowIcon src={rightArrowGreen} arrowSize={props.arrowSize} />;
    
    let content = (
            <Fragment>
                {props.children}
                {icon}
            </Fragment>
    )

    if (props.inverted) content = (
        <Fragment>
            <ArrowIcon inverted src={leftArrowBlack} arrowSize={props.arrowSize} />
            {props.children}
        </Fragment>
    )

    if (props.noArrow) content = (
        <Fragment>
            {props.children}
        </Fragment>
    )

    return (
        <BoldLink to={props.to} exact={props.exact} hasColor={props.hasColor} fontSize={props.fontSize}>
            {content}
        </BoldLink>
    );
}

export default StyledLink;