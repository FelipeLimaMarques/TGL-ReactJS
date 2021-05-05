import React from 'react';

import Spinner from '../Spinner';
import Backdrop from '../Backdrop';
import { Div } from './styles';

const Loading: React.FC = () => {
    return (
        <React.Fragment>
            <Div>
                <Spinner withDiv={false} />
            </Div>
                <Backdrop show={true} />
        </React.Fragment>
    )
}

export default Loading;