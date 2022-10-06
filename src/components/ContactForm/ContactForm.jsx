import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import {
    FormPlateStyled,
    Label,
    Input,
    ErrorMessageStiled,
} from './ContactForm.styled';

const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().required(),
});

const ContactForm = function () {
  const dispatch = useDispatch();
  const handleSubmit = values => {
    dispatch(addContact(values));
  };

  return (
    <FormPlateStyled>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={schema}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
        }}
      >
        <Form>
          <Label>
            Name
            <br />
            <Input type="text" name="name" />
            <ErrorMessageStiled name="name" component="div" />
          </Label>
          <br />
          <Label>
            Number
            <br />
            <Input type="tel" name="number" placeholder="+380..." />
            <ErrorMessageStiled name="number" component="div" />
          </Label>
          <br />
          <button type="submit" name="addContact">
            Add contact
          </button>
        </Form>
      </Formik>
    </FormPlateStyled>
  );
};

export default ContactForm;