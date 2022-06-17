import React, { useState } from 'react';
import { Select, Input, Layout, Typography } from 'antd';
import { priceReverse } from '../../utils/utils';
import './style.css';

const RatesReversecm = (props) => {
    const {
        onChange,
        data,
        selected,
        selectedCoin,
        children
    } = props;

    const [inputValue2, setInputValue2] = useState('');

    const onChangeInput2 = (e) => {
        setInputValue2(e.target.value)
    }
    selectedCoin.priceReverse = priceReverse(inputValue2, selectedCoin.rateUsd);

    const filterSelectedOption = (input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;

    return (
        <div className='mainBlock'>
            <div className='inputs'>
                <Typography.Title level={3} className="textColor">
                    USD
                </Typography.Title>
                <Input
                    type={'number'}
                    min="0"
                    className='selectInput'
                    value={inputValue2}
                    onChange={onChangeInput2}
                />
            </div>
            <div className='reverseBTn'>
                {children}
            </div>
            <div className='inputs'>
                <Select
                    showSearch
                    onChange={onChange}
                    value={selected}
                    className='selectInput'
                    filterOption={(input, option) => filterSelectedOption(input, option)}
                >
                    {data.map(select => <Select.Option key={select.id} value={select.symbol}>{select.symbol}</Select.Option>)}
                </Select>
                <Typography.Title level={4} className="textColor">
                    {`${selectedCoin.priceReverse}  ${selectedCoin.currencySymbol ?? ''}`}
                </Typography.Title>
            </div>
        </div>
    );
}

export default RatesReversecm;
