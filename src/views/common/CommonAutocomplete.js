import Autocomplete from 'react-autocomplete';
import React from 'react';

const CommonAutocomplete = props => {

    return(
        <div className="autocomplete-wrapper">
            <Autocomplete
                inputProps={{ id: props.id, placeholder: props.placeholder, disabled: props.disabled, autoFocus: props.autoFocus }}
                value={props.name ? props.name.toString() : ''}
                items={props.items}
                getItemValue={ item => item.name.toString() }
                renderMenu={item => (<div className="dropdown"> {item} </div>)}
                renderItem={(item, isHighlighted) =>
                    <div
                        key = {item.id}
                        className={`item ${isHighlighted ? 'selected-item' : ''}`}
                    >{item.name}
                    </div>}
                onChange={props.onChange}
                onSelect={props.onSelect}
            />
        </div>
    )
}

export default CommonAutocomplete
