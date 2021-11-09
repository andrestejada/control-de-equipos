import { Form, Input, Button,Spin } from 'antd'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { formEquipmentType } from '../../../../types/equipmentTypes';
import { UseForm } from '../../../../hooks/useForm';
import Spinner from '../../../layout/Spinner/Spinner';


export const FormEquipments = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState<Boolean>(false)
    const initialValues:formEquipmentType={
      tag:'',
      descripcion:'',
      ubicacion:'',
      marca:'',
      modelo:'',
      magnitud:'',
      crv:'',
      urv:'',
      densidad:'',
      altura:'',
      observaciones:'',
    }
    const [values,onChangeValues] = UseForm(initialValues)
    const {tag,descripcion,ubicacion,marca,modelo,magnitud,crv,urv,densidad,altura,observaciones} = values;
    return (
        <div className='form-box'>
      <Form
           //onFinish={OnSubmit}
           //initialValues={initialValues}
      >
        <Form.Item          
          label='Tag'
          name='tag'          
        >
          <Input 
            type='text' 
            name='tag'
            value={tag}
            onChange={onChangeValues}
            readOnly
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
            onChange={onChangeValues}
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
            onChange={onChangeValues}
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
            onChange={onChangeValues}
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
            onChange={onChangeValues}
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
            onChange={onChangeValues}
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
            onChange={onChangeValues}
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
            onChange={onChangeValues}
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
            onChange={onChangeValues}
          />
        </Form.Item>
        <Form.Item

          label='Observaciones'
          name='obsevaciones'           
        >
          <Input.TextArea                       
            name='observaciones'
            value={observaciones}    
            onChange={onChangeValues}        
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
