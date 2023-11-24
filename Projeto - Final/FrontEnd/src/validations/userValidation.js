import * as Yup from 'yup';

export const userValidationSchema = Yup.object().shape({
    Nome: Yup.string().required('Nome Completo é um campo obrigatório.'),
    // doador: Yup.string().required('Tipo de Doador é um campo obrigatório.'),
    CPF: Yup.string().required('CPF é um campo obrigatório.').min(11, 'Este campo deve conter 11 caracteres'),
    Enderoco: Yup.string().required('Endereço é um campo obrigatório.'),
    cidade: Yup.string().required('Cidade é um campo obrigatório.'),
    Estado: Yup.string().required('Estado é um campo obrigatório.'),
    Telefone: Yup.string().required('Telefone é um campo obrigatório.'),
    Email: Yup.string().email('Coloque um e-mail válido.').required('E-mail é um campo obrigatório.'),
    senha: Yup.string().required('Senha é um campo obrigatório.').min(6, 'O campo Senha deve conter pelo menos 6 caracteres.'),
    ConfirmarSenha: Yup.string().required('Confirmar Senha é um campo obrigatório.').min(6, 'O campo Senha deve conter pelo menos 6 caracteres').oneOf([Yup.ref('senha'), null], 'As senhas inseridas não são iguais.'),

})