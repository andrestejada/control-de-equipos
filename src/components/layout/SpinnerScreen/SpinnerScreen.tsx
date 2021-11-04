import { Spin } from "antd"

const SpinnerScreen = () => {
    return (
        <>
            <div className="spinner-screen" >
                <Spin        
                    size="large"
                ></Spin>
                <p>Cargando Por favor espere</p>
            </div>
        </>
    )
}

export default SpinnerScreen
