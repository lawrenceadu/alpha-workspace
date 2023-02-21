import { Form, Formik } from 'formik';
import { Alert, Field } from '@alpha/ui';
import { schema } from '@alpha/utils';
import { object } from 'yup';

function Index() {
  return (
    <>
      <Alert variant="info">Hello world</Alert>
      <Formik
        validateOnMount
        validationSchema={object({
          full_name: schema.requireString('Full name'),
          date_of_birth: schema.requireString('Date of birth'),
          phone_number: schema.requirePhoneNumber('Phone number'),
          otp: schema.requireOTP('OTP'),
          amount: schema.requireNumber('Amount'),
        })}
        initialValues={{
          full_name: '',
          date_of_birth: '',
          phone_number: '',
          otp: '',
          amount: '',
        }}
        onSubmit={() => {
          return;
        }}
      >
        {({ values, setFieldValue, setFieldTouched }) => (
          <Form className="w-[500px] mx-auto py-6">
            <Field.Group name="full_name" label="Full name">
              <Field.Input name="full_name" value={values.full_name} />
            </Field.Group>
            <Field.Group name="date_of_birth" label="Date of birth">
              <Field.Date
                name="date_of_birth"
                value={values.date_of_birth}
                {...{ setFieldValue, setFieldTouched }}
              />
            </Field.Group>
            <Field.Group name="phone_number" label="Phone number">
              <Field.Phone
                name="phone_number"
                value={values.phone_number}
                {...{ setFieldValue, setFieldTouched }}
              />
            </Field.Group>

            <Field.Group
              name="otp"
              label="OTP"
              containerClassName="!border-0 !shadow-none"
            >
              <Field.Otp
                name="otp"
                values={values.otp}
                onChange={(value) => setFieldValue('otp', value)}
              />
            </Field.Group>

            <Field.Group name="amount" label="Salary">
              <span className="px-4">GHS</span>
              <Field.Input type="number" name="amount" value={values.amount} />
              <span className="px-4">.00</span>
            </Field.Group>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Index;
