import * as yup from "yup";

export const SignUpSchema = yup.object().shape({
    //email: yup.string().email("Doqru bir Email adressine daxil olun").required("Email Alani Bos buraxilmaz"),
  
    username: yup.string().required('istifadeci adi bosh buraxila bilmez').min(3, "istifadeci adi en az 3 karakter olmalidi"),

    displayName: yup.string().required('displayName bosh buraxila bilmez').min(3, "displayName adi en az 3 karakter olmalidi"),

    password: yup.string().required("Password is required").min(3, "Password is too short - should be 6 chars minimum"),

    passwordConfirm: yup.string().oneOf([yup.ref('password')] , "dont match password").required()
});


export const SignInSchema = yup.object().shape({
    //email: yup.string().email("Doqru bir Email adressine daxil olun").required("Email Alani Bos buraxilmaz"),
  
    username: yup.string().required('istifadeci adi bosh buraxila bilmez').min(3, "istifadeci adi en az 3 karakter olmalidi"),
    password: yup.string().required("Password is required").min(3, "Password is too short - should be 6 chars minimum"),
});