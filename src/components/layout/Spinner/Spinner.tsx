import { Spin } from 'antd';
import { CSSProperties } from 'react';

const styles:CSSProperties={
    textAlign:'center',
    width: '100%',
    margin: '0.8rem',
}

export default function Spinner() {
    return (
        <div className='spinner-box' >
            <Spin
                size='large'
                style={styles}
            />
        </div>
    )
}
