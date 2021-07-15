import { Component } from 'react'
import './post-status-filter.css'

export default class PostFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'All'},
            {name: 'like', label: 'Liked'}
        ]
    }

    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const {filter, onFilterSelect} = this.props;
            const active = filter === name;
            const className = active ? 'btn-info' : 'btn-outline-secondary'

            return (
                <button 
                    key={name} 
                    type='button' 
                    className={`btn ${className}`}
                    onClick={() => onFilterSelect(name)}>
                    {label}
                </button>
            )
        });

        return (
            <div className='btn-group'>
                {buttons}                
            </div>
        )
    }
}