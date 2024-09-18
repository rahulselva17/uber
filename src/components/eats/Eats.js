import React, { useState } from 'react';

const Eats = () => {
    const [search, setSearch] = useState('');
    const [options, setOptions] = useState(['Option 1', 'Option 2', 'Option 3']); // Initial options

    const handleRemoveOption = (optionToRemove) => {
        setOptions(options.filter(option => option !== optionToRemove));
    };

    return (
        <div className="search-input">
            <div className="input-container">
                {options.map((option, index) => (
                    <span key={index} className="option-tag" onClick={() => handleRemoveOption(option)}>
                        {option} <button className="remove-btn">&times;</button>
                    </span>
                ))}
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder={options.length === 0 ? 'Search...' : ''}
                    style={{ flexGrow: 1 }}
                />
            </div>
        </div>
    );
};

export default Eats;
