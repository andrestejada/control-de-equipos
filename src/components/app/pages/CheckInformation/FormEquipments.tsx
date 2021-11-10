import { Form, Input, Button,Spin } from 'antd'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { formEquipmentType } from '../../../../types/equipmentTypes';
import { UseForm } from '../../../../hooks/useForm';
import Spinner from '../../../layout/Spinner/Spinner';
import { PoweroffOutlined } from '@ant-design/icons';

interface props{
  equipment:formEquipmentType
}
export const FormEquipments = ({equipment}:props) => {
    const {
      tag,
      descripcion,
      altura,
      densidad,
      magnitud,
      marca,
      crv,
      modelo,
      ubicacion,
      urv,
      observaciones
    }= equipment
    const dispatch = useDispatch();
    const [loading, setLoading] = useState<Boolean>(false)
    console.log(tag);
    
    return (
        <div className='form-box'>
      <Form
           //onFinish={OnSubmit}
           initialValues={equipment}
      >
        <Form.Item          
          label='Tag'
          name='tag'
                             
        >
          <Input 
            type='text' 
            name='tag'
            value={tag}
            readOnly
            //onChange={onChangeValues}            
          />
        </Form.Item>
        <Form.Item          
          label='Descripción'
          name='descripcion'
          
        >
          <Input 
            type='text'
            name='descripcion'
            value={descripcion}
            // onChange={onChangeValues}
            readOnly
          />
        </Form.Item>
        <Form.Item          
          label='Ubicación'
          name='ubicacion'
           
        >
          <Input 
            type='text'
            name='ubicacion'
            value={ubicacion}
            // onChange={onChangeValues}
            readOnly
          />
        </Form.Item>
        <Form.Item          
          label='Marca'
          name='marca'           
        >
          <Input 
            type='text'
            name='marca'
            value={marca}
            // onChange={onChangeValues}
            readOnly
          />
        </Form.Item>
        <Form.Item          
          label='Modelo'
          name='modelo'           
        >
          <Input 
            type='text'
            name='modelo'
            value={modelo}
            // onChange={onChangeValues}
            readOnly
          />
        </Form.Item>
        <Form.Item          
          label='Magnitud'
          name='magnitud'           
        >
          <Input 
            type='text'
            name='magnitud'
            value={magnitud}
            // onChange={onChangeValues}
            readOnly
          />
        </Form.Item>
        <Form.Item          
          label='CRV'
          name='crv'           
        >
          <Input 
            type='text'
            name='crv'
            value={crv}
            // onChange={onChangeValues}
            readOnly
          />
        </Form.Item>
        <Form.Item          
          label='URV'
          name='urv'           
        >
          <Input 
            type='text'
            name='urv'
            value={urv}
            // onChange={onChangeValues}
            readOnly
          />
        </Form.Item>
        <Form.Item          
          label='Densidad'
          name='densidad'           
        >
          <Input 
            type='text'
            name='densidad'
            value={densidad}
            // onChange={onChangeValues}
            readOnly
          />
        </Form.Item>
        <Form.Item          
          label='Altura'
          name='altura'           
        >
          <Input 
            type='text'
            name='altura'
            value={altura}
            // onChange={onChangeValues}
            readOnly
          />
        </Form.Item>
        <Form.Item

          label='Observaciones'
          name='obsevaciones'           
        >
          <Input.TextArea                       
            name='observaciones'
            value={observaciones}    
            // onChange={onChangeValues}    
            readOnly    
          />
        </Form.Item>
        
        <Button 
            type="primary" 
            htmlType="submit"
            block
            disabled={ loading ? true :false}
        >
          Ingresar Equipo
        </Button>
        {
            loading
                ? <Spinner />
                :null
        }
      </Form>
      </div>
    )
}
