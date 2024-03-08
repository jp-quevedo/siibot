import { object, string, number } from 'yup'

export const signupSchema = object().shape({
    passowrd:
        string()
        .required('Contraseña requerida')
        .min(8, 'La contraseña debe tener 8 carácteres como mínimo'),
    email:
        string()
        .required('Email requerido')
        .email('Email inválido'),
    phoneNumber:
        number()
        .required('Número requerido')
        .min(9, 'Teléfono inválido'),
    address:
        string()
        .required('Dirección requerida'),
    dni:
        number()
        .required('Rut requerido')
        .min(8, 'Rut inválido'),
    name:
        string()
        .required('Nombre requerido')
        .min(6, 'Nombre inválido')
})

export const loginSchema = object().shape({
    passowrd:
        string()
        .required('Contraseña requerida'),
    email:
        string()
        .required('Email requerido')
        .email('Email inválido'),
})