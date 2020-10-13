import React from 'react';

import { FacetActions } from '@unbxd-ui/react-search-sdk';
import { scrollTop, srollTopIE } from '../utils';

const ApplyFilter = ({ onApplyFilter }) => (
    <button className="-apply" onClick={onApplyFilter}>
        Apply
    </button>
);
const ClearFilter = ({ onClearFilter }) => (
    <button className="-clear" onClick={onClearFilter}>
        Clear
    </button>
);

const FacetApplyClear = (props) => {
    const { handleClose } = props;
    const onApply = (facets) => {
        console.log('Facets apply :', facets);
        scrollTop();
        //srollTopIE();
        handleClose();
        return true;
    };

    const onClear = () => {
        console.log('Facets clear :');
        scrollTop();
        //srollTopIE();
        handleClose();
        return true;
    };

    return (
        <FacetActions
            ApplyFilterComponent={ApplyFilter}
            ClearFilterComponent={ClearFilter}
            onApply={onApply}
            onClear={onClear}
        />
    );
};

export default FacetApplyClear;
