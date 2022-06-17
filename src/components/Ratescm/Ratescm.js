import React from 'react';
import { Select, Input, Layout, Typography } from 'antd';
import './style.css';

const Ratescm = (props) => {
    const {
        onChange,
        onChangeInput,
        inputValue,
        data,
        selected,
        selectedCoin,
        children
    } = props;

    const filterSelectedOption = (input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    return (
        <div className='mainBlock'>
            <div className='inputs'>
                <Select
                    showSearch
                    onChange={onChange}
                    value={selected}
                    filterOption={(input, option) => filterSelectedOption(input, option)}
                >
                    {data.map(select => <Select.Option key={select.id} value={select.symbol}>{select.symbol}</Select.Option>)}
                </Select> <br />
                <Input
                    type={'number'}
                    min="0"
                    value={inputValue}
                    onChange={onChangeInput}
                />
            </div>
            <div className='reverseBTn'>
                {children}
            </div>
            <div className='resultBlock'>
                <Typography.Title level={3} className="textColor">
                    USD
                </Typography.Title>
                <Typography.Title level={4} className="textColor">
                    {`${selectedCoin.price} $`}
                </Typography.Title>
            </div>
        </div>
    );
}

export default Ratescm;
