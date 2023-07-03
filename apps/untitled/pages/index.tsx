import { useState } from 'react';
import { Button, Dropdown, Field, Modal, Paginate, Progress } from '@alpha/ui';
import { Form, Formik } from 'formik';

function Index() {
  /**
   * state
   */
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>Modal</Button>

      <Paginate page={2} setPage={() => null} pageCount={10} />

      <Progress
        step={1}
        count={3}
        title="Hello world"
        next="Hello owrld again"
      />

      <Modal show={show} onHide={() => setShow(false)}>
        <>Hello world</>
      </Modal>

      <Dropdown>
        <Dropdown.Toggle as={Button} className="btn btn-primary">
          Hello world
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Hello world</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Formik initialValues={{}} onSubmit={() => null}>
        {({ values }) => (
          <Form>
            <Field.Toggle checked={false}>Hello world</Field.Toggle>
            <Field.Checkbox checked>Hello world</Field.Checkbox>
            <Field.Radio checked>Hello world</Field.Radio>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Index;
