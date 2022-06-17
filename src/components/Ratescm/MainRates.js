import React, { useState, useRef, useEffect } from 'react';
import { price, priceReverse, baseUrl } from './../../utils/utils';
import axios from 'axios';
import { connect } from 'react-redux';
import { a_setData } from './../../redux/actions';
import Ratescm from './Ratescm';
import { SwapOutlined } from '@ant-design/icons';
import { Button, Spin, Typography } from 'antd';
import RatesReversecm from './RatesReversecm';
import Date from './../../components/Date/Date';
import './style.css';

const Mainrates = (props) => {
    const { setDataAC } = props;

    const [data, setData] = useState([]);
    const [selectedCoin, setSelectedCoin] = useState({});
    const [selected, setSelected] = useState('Выберите валюту');
    const [inputValue, setInputValue] = useState('');

    const [loading, setLoading] = useState(true);
    const [reverse, setReverse] = useState(true);
    const increment = useRef(null);

    const getRates = async () => {
        try {
            setLoading(true)
            const response = await axios.get(baseUrl);
            const data = await response.data.data;
            setData(data);
            setLoading(false)
            setDataAC(data);
        } catch (e) {
            console.log(e);
        }
    }

    const handleStart = () => {
        getRates()
        increment.current = setInterval(async () => {
            getRates()
        }, 60000);
    };

    useEffect(() => {
        handleStart()
    }, [])

    const onChange = (value) => {
        findSelectedData(value)
        setSelected(value)
    }

    const onChangeInput = (e) => {
        setInputValue(e.target.value)
    }


    const findSelectedData = (symbol) => {
        const coin = data.find(name => symbol === name.symbol)
        setSelectedCoin(coin)
    }
    selectedCoin.price = price(selectedCoin.rateUsd, inputValue);

    selectedCoin.result = inputValue;

    const reversRates = () => {
        setReverse(!reverse)
    }
    return <>
        <Date />
        <div className='flex'>
            {loading && <Spin size="large" />}
        </div>
        <Typography.Title strong className='title'>
            Конвертер валют
        </Typography.Title>
        {
            reverse ?
                <Ratescm
                    onChange={onChange}
                    onChangeInput={onChangeInput}
                    inputValue={inputValue}
                    data={data}
                    selected={selected}
                    selectedCoin={selectedCoin}
                    {...props} >
                    <Button danger onClick={reversRates}><SwapOutlined /></Button>
                </Ratescm>
                :
                <RatesReversecm
                    onChange={onChange}
                    data={data}
                    selected={selected}
                    selectedCoin={selectedCoin}
                    {...props}
                >
                    <Button danger onClick={reversRates}><SwapOutlined /></Button>
                </RatesReversecm>
        }
    </>
}

const mapDispatchToProps = dispatch => ({
    setDataAC: payload => {
        dispatch(a_setData(payload))
    }
})

export default connect(
    mapDispatchToProps
)(Mainrates);

