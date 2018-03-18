import React from 'react';
import styled from 'styled-components';
import { withFormik } from 'formik';
import Yup from 'yup';

import style from '../assets/style';
import Auxi from '../hoc/Auxi';
import { 
  NavbarSigned,
  Input,
  ButtonWide,
  Form
} from '../components';

const BuatGrupForm = Form.extend`
  width: 725px;
  height: 550px;
  margin-top: 30px;
`

const HeaderImage = styled.div`
  box-sizing: border-box;
  width: 615px;
  height: 108px;
  border-radius: 5px;
  background: linear-gradient(180deg, #03256C -156.48%, #2541B2 100%);
  position: relative;
  margin-bottom: 50px;
`

const BoxIcon = styled.div`
    box-sizing: border-box;
    position: absolute;
    border-radius: 5px;
    top: 65%;
    left: 56px;
    width: 70px;
    height: 70px; 
    margin: 0 auto;
    background-position: center;
    background-size: cover;
    
    ${props => props.groupImage 
      ? `background-image: url(${props.groupImage});`
      : 'background: radial-gradient(25.14px at 50% 64.09%, #91D7ED 0%, #56CCF2 100%);'  
    }  
`

const InputWide = Input.extend`
    width: 615px;
`

const BuatGrupBtn = ButtonWide.extend`
    align-self: flex-end;
    margin-right: 56px;
    width: 250px;
`

const BuatGrup = props => {
  const {
    values,
    handleChange,
    handleSubmit,
  } = props;

  return (
    <Auxi>
      <NavbarSigned />
      <BuatGrupForm onSubmit={handleSubmit}>
        <HeaderImage>
          <BoxIcon />
        </HeaderImage>
        <InputWide 
          id="namaGrup"
          type="namaGrup"
          placeholder="Nama Grup"
          value={values.namaGrup}
          onChange={handleChange} />
        <InputWide 
          id="deskripsi"
          type="deskripsi"
          placeholder="Deskripsi"
          value={values.deskripsi}
          onChange={handleChange} />
        <InputWide 
          id="belajarApa"
          type="belajarApa"
          placeholder="Belajar Apa?"
          value={values.belajarApa}
          onChange={handleChange} />
        <BuatGrupBtn type="submit" >Buat Grup</BuatGrupBtn>
      </BuatGrupForm>
    </Auxi>
  );
} 

const EnhancedForm = withFormik({
  mapPropsToValue: () => ({
    namaGrup: '',
    deskripsi: '',
  }),

  validationSchema: Yup.object().shape({
    namaGrup: Yup.string().required('Nama Grup is required!'),
    deskripsi: Yup.string().required('Deskripsi required'),
  }),

  handleSubmit: (values, { props, setSubmitting }) => {
    console.log(values)
    props.login(values)
  },
  
  displayName: 'Basic Form', 
})(BuatGrup)

export default EnhancedForm;